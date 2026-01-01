console.log('Preload script is running!');
console.log('Process type:', process.type); // Should be 'renderer'

const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('systemAPI', {
    sendMessage: (data) => ipcRenderer.send('send-to-main', data), 
    onMessage: (cb) => ipcRenderer.on('send-to-renderer', (_event, data) => cb(data)),
});