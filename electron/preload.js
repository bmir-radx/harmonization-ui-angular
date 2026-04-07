const { contextBridge, ipcRenderer, webUtils } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    saveFile: (path, content) => ipcRenderer.invoke('save-file', path, content),
    readFile: (path) => ipcRenderer.invoke('read-file', path),
    getFilePath: (file) => webUtils.getPathForFile(file),
    showSaveDialog: () => ipcRenderer.invoke('show-save-dialog'),
    showOpenDialog: () => ipcRenderer.invoke('show-open-dialog'),
    getApiUrlSync: () => ipcRenderer.sendSync('get-api-url-sync')
});
