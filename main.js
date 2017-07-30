// AlphaGriffin.com 2017
// <Ruckusist@alphagriffin.com>

// Main.js for Alphagriffin Deskapp
// Electron App
'use strict';
// Imports
const electron = require('electron')

// Defines
const app = electron.app
const {ipcMain} = require('electron')
const path = require('path')
const url = require('url')
const BrowserWindow = electron.BrowserWindow
// const newWindowBtn = document.getElementById('frameless-window')
// path = path.join(`file://${__dirname}/index.html`)

// Globals
let mainWindow
let secondWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow(
    {  width: 600,
       height: 420,
       frame: false,
       backgroundColor: '#222',
       icon: path.join(__dirname, 'app/img/logo64.png'),
       titleBarStyle: 'hidden',
       show: false,
     }
  )
  // load the path
  // Load a URL in the window to the local index.html path

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    // pathname: 'https://alphagriffin.com',
    protocol: 'file:',
    slashes: true
  }))

  // Show window when page is ready
  mainWindow.once('ready-to-show', function () {
    mainWindow.show()
  })
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('close', function () {
      mainWindow = null }
  )}

// When Ready
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  // for macs
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // for macs
  if (mainWindow === null) {
    createWindow()
  }
})
