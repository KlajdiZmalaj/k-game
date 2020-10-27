const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 900, height: 470, resizable: false });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  if (!isDev) {
    win.removeMenu();
  }
  // win.removeMenu();
}
app.on("ready", createWindow);
