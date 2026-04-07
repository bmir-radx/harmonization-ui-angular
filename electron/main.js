const { app, BrowserWindow, ipcMain, dialog, session } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');
const http = require('http');

let sidecarProcess = null;
let apiPort = 8000; // Dev default, dynamically set in prod

function getAvailablePort() {
    return new Promise((resolve, reject) => {
        const server = http.createServer();
        server.unref();
        server.on('error', reject);
        server.listen(0, '127.0.0.1', () => {
            const port = server.address().port;
            server.close(() => resolve(port));
        });
    });
}

function waitForSidecar(port, maxRetries = 30) {
    return new Promise((resolve, reject) => {
        let retries = 0;
        const interval = setInterval(() => {
            http.get(`http://127.0.0.1:${port}/health/`, (res) => {
                if (res.statusCode === 200) {
                    clearInterval(interval);
                    resolve();
                }
            }).on('error', () => {
                // Ignore error, server not ready yet
            });
            retries++;
            if (retries >= maxRetries) {
                clearInterval(interval);
                reject(new Error('Sidecar timeout'));
            }
        }, 500);
    });
}

async function startSidecar() {
    if (!app.isPackaged) return; // In dev, we assume python runs externally via make/npm or manually

    apiPort = await getAvailablePort();
    
    // Determine OS-specific binary path
    let binaryName = 'harmonization-sidecar';
    if (process.platform === 'win32') binaryName += '.exe';
    
    const sidecarDir = path.join(process.resourcesPath, 'sidecar', 'harmonization-sidecar');
    const sidecarPath = path.join(sidecarDir, binaryName);

    console.log('Starting sidecar at:', sidecarPath, 'on port', apiPort);

    sidecarProcess = spawn(sidecarPath, [], {
        env: { ...process.env, API_PORT: apiPort.toString() }
    });

    sidecarProcess.stdout.on('data', (data) => console.log(`Sidecar: ${data}`));
    sidecarProcess.stderr.on('data', (data) => console.error(`Sidecar error: ${data}`));

    await waitForSidecar(apiPort);
}

ipcMain.on('get-api-url-sync', (event) => {
    // In production, we construct the sidecar URL dynamically based on allocated port
    event.returnValue = app.isPackaged ? `http://127.0.0.1:${apiPort}/api` : '/api';
});

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
            webSecurity: false // Often helpful in dev for loading local resources
        }
    });

    // In development, load the Angular dev server
    const isDev = !app.isPackaged;
    if (isDev) {
        win.loadURL('http://localhost:4200');
        win.webContents.openDevTools();
    } else {
        // In production, load the built index.html
        win.loadFile(path.join(__dirname, '../dist/data-harmonization-angular/browser/index.html'));
    }
}

app.whenReady().then(async () => {
    // Inject overly-permissive CORS headers for local APIs accessed from the file:// renderer
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                'Access-Control-Allow-Origin': ['*'],
                'Access-Control-Allow-Methods': ['GET, POST, OPTIONS, PUT, PATCH, DELETE'],
                'Access-Control-Allow-Headers': ['*']
            }
        });
    });

    try {
        await startSidecar();
    } catch (e) {
        console.error('Failed to start sidecar:', e);
    }
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('before-quit', () => {
    if (sidecarProcess) {
        try {
            const req = http.request({
                hostname: '127.0.0.1',
                port: apiPort,
                path: '/shutdown/',
                method: 'POST'
            });
            req.on('error', () => {
                if (sidecarProcess) sidecarProcess.kill();
            });
            req.end();
            
            // Set a timeout to kill it if it doesn't close fast
            setTimeout(() => {
                if (sidecarProcess) sidecarProcess.kill();
            }, 1000);
        } catch (e) {
            if (sidecarProcess) sidecarProcess.kill();
        }
    }
});

// IPC Handler to save files directly to disk
ipcMain.handle('save-file', async (event, filePath, content) => {
    try {
        // Ensure directory exists
        const dirname = path.dirname(filePath);
        if (!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname, { recursive: true });
        }

        fs.writeFileSync(filePath, content, 'utf8');
        return { success: true };
    } catch (error) {
        console.error('Error saving file:', error);
        throw error;
    }
});

// IPC Handler to read files from disk
ipcMain.handle('read-file', async (event, filePath) => {
    try {
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        const content = fs.readFileSync(filePath, 'utf8');
        return content;
    } catch (error) {
        console.error('Error reading file:', error);
        throw error;
    }
});

// IPC Handler for Save Dialog
ipcMain.handle('show-save-dialog', async () => {
    return await dialog.showSaveDialog({
        title: 'Save Harmonization Project',
        defaultPath: 'project.harm',
        filters: [{ name: 'Harmonization Project', extensions: ['harm'] }]
    });
});

// IPC Handler for Open Dialog
ipcMain.handle('show-open-dialog', async () => {
    return await dialog.showOpenDialog({
        title: 'Open Harmonization Project',
        filters: [{ name: 'Harmonization Project', extensions: ['harm'] }],
        properties: ['openFile']
    });
});
