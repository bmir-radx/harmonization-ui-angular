const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    saveFile: (path, content) => ipcRenderer.invoke('save-file', path, content),
    readFile: (path) => ipcRenderer.invoke('read-file', path)
});
