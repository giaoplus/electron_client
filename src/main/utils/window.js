const { BrowserWindow } = require('electron').remote;

class newWindow {
  constructor(config) {
    this.win = new BrowserWindow({
      width: 900,
      height: 600,
      show: false,
      webPreferences: {
        nodeIntegration: true
      }
    })

    this.win.loadURL('http://localhost:9527/dialog.html');

    this.win.once('ready-to-show', () => {
      this.win.show();
    })

    this.win.on('closed', () => {
      this.win = null;
    })
  }
}

module.exports = newWindow;