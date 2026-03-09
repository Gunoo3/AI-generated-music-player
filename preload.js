const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("playlistAPI", {
  save: data => ipcRenderer.send("save-playlist", data),
  load: () => ipcRenderer.invoke("load-playlist")
});
