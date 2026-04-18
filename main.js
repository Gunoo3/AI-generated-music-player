const { app, BrowserWindow, ipcMain } = require('electron');
require('@electron/remote/main').initialize();

let mainWindow;

function createWindow() {
  // Window size should match the circular frame size.
  // Adjust these if you change --tank-size / --border-thickness / --ui-scale in styles.css.
  const WINDOW_WIDTH = 520;
  const WINDOW_HEIGHT = 520;

  mainWindow = new BrowserWindow({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  require('@electron/remote/main').enable(mainWindow.webContents);

  mainWindow.loadFile('index.html');
  mainWindow.setIgnoreMouseEvents(false);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

ipcMain.on('close-window', () => {
  if (mainWindow) {
    mainWindow.close();
  }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
