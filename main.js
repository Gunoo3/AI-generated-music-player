const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 520,
    height: 140,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

const playlistPath = path.join(app.getPath("userData"), "playlist.json");

ipcMain.on("save-playlist", (event, data) => {
  fs.writeFileSync(playlistPath, JSON.stringify(data, null, 2));
});

ipcMain.handle("load-playlist", () => {
  if (!fs.existsSync(playlistPath)) return [];
  return JSON.parse(fs.readFileSync(playlistPath, "utf8"));
});
