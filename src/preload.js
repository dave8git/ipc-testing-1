console.log('Preload script is running!');
console.log('Process type:', process.type); // Should be 'renderer'

const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('systemAPI', {
    getSystemInfo: () => ipcRenderer.send('get-system-info'),
    onSystemInfo: (cb) => ipcRenderer.on('system-info', (_event, data) => cb(data))
});