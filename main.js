// AlphaGriffin.com 2017
// <Ruckusist@alphagriffin.com>

// Main.js for Alphagriffin Deskapp
// Electron App
'use strict';
// Imports
const electron = require('electron')
const path = require('path')
const url = require('url')

// Defines
const app = electron.app
const ipcMain = require('electron').ipcMain;
const BrowserWindow = electron.BrowserWindow

// Globals
let mainWindow

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

  // Load a URL in the window to the local app/index.html path
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

// Show the main window
ipcMain.on('show-main', function() {
  mainWindow.loadURL(path.join('file://' + __dirname + 'app/index.html'));
});

// Create the about window
ipcMain.on('show-about', function() {
  mainWindow.loadURL('file://' + __dirname + 'app/templates/about.html');
});

// Create the faq window
ipcMain.on('show-faq', function() {
  mainWindow.loadURL('file://' + __dirname + 'app/templates/bitcoin_balance.html');
});

// Create the faq window
ipcMain.on('exit', function() {
  app.quit()
});
