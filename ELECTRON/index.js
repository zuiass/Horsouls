const { app, BrowserWindow } = require('electron');

let mainWindow;

app.whenReady().then(() => {
    const { screen } = require('electron');
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    mainWindow = new BrowserWindow({
        minWidth: Math.round(width * 0.3778),
        minHeight: Math.round(height * 0.7000),
        
        autoHideMenuBar: true,
        icon: '../PROJETO/Frontend/Imagens/horse.png',

        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.maximize();
    mainWindow.loadFile('../PROJETO/Frontend/Janelas/Principal/index.html');

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
});