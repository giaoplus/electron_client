const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  let isDev = process.env.NODE_ENV === 'development'

  const win = new BrowserWindow({
    width: 900,
    height: 600,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      webSecurity: true
    }
  })

  win.menuBarVisible = false

  if(isDev) {
    win.loadURL('http://localhost:3000/index.html')
    win.webContents.openDevTools();
  }else{
    win.loadFile(path.resolve(__dirname, './dist/index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
