// AlphaGriffin.com 2017
// <Ruckusist@alphagriffin.com>

// Main.js for Alphagriffin Deskapp
// Electron App

// Imports
const ipcRenderer = require('electron').ipcRenderer;

// Button Functions
function turnoff() {
  ipcRenderer.send('exit');
};
