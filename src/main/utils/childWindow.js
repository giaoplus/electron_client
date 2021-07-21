const { BrowserWindow } = require('electron')
const path = require('path')

class ChildWindow {
  constructor(config) {
    this.win = new BrowserWindow({
      width: 900,
      height: 600,
      show: false,
      webPreferences: {
        nodeIntegration: true
      }
    })

    if(isDev) {
      this.win.loadURL('http://localhost:3000/dialog.html')
      this.win.webContents.openDevTools();
    }else{
      this.win.loadFile(path.resolve(__dirname, './dist/dialog.html'))
    }

    this.win.once('ready-to-show', () => {
      this.win.show();
    })

    this.win.on('closed', () => {
      this.win = null;
    })
  }
}

module.exports = ChildWindow
