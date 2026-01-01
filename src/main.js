const { app, BrowserWindow, ipcMain } = require('electron');
const { platform } = require('node:os');
const path = require('node:path');
const os = require('os');
let mainWindow;

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.webContents.openDevTools();
};

ipcMain.on('get-system-info', () => {
  mainWindow.webContents.send('system-info', {
    platform: os.platform(),
    cpuCount: os.cpus().length,
    memory: os.totalmem()
  });
});

app.whenReady().then(() => {
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
