const { contextBridge, ipcRenderer, webUtils } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    saveFile: (path, content) => ipcRenderer.invoke('save-file', path, content),
    readFile: (path) => ipcRenderer.invoke('read-file', path),
    getFilePath: (file) => webUtils.getPathForFile(file)
});
