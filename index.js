const { app, BrowserWindow, Menu, shell, dialog, ipcMain } = require('electron')

const path = require('path')

const template = [
  {
      label: "Fichier",
      submenu: [
          {
              label: "Ouvrir un fichier",
              click: (e) => {
                  dialog.showOpenDialog(e.sender, {
                      title: "Mon ouverture de fichier",
                      filters: [
                          { name: "fichier texte", extensions: ["txt"] }
                      ],
                      properties: ["openFile"]
                  }).then((res) => {
                      console.log(res.filePaths);
                      cheminFichier = res.filePaths[0];
                      mainWindow.reload();
                  });
              }
          },
          {
              label: "Afficher la doc Electron",
              click: () => {
                  shell.openExternal("https://www.electronjs.org/fr/docs/latest/");
              }
          },
          {
              label: "Dev tools",
              role: "toggleDevTools"
          },
          {
              label: "Quitter",
              role: "quit"
          }
      ]
  }
];
let mainWindow;
let cheminFichier = "";
const menu = Menu.buildFromTemplate(template);

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      }
    })
    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
})
