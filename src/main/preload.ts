import { contextBridge, ipcRenderer } from 'electron';

// the channel needed to be added into validChannels in order for react to receive it

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    test(){
      ipcRenderer.send('test msg', 'can electron receive this?')
    },
    sendMsg(msg){
      ipcRenderer.send('test msg', msg)
    },
    importCsv(filePath){
      ipcRenderer.send('import csv', filePath)
    },
    exportCsv(){
      ipcRenderer.send('export csv', 'export csv please')
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    on(channel: string, func: (...args: any[]) => void) {
      const validChannels = ['ipc-example', 'test msg', 'import csv', 'export csv'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (_event, ...args) => func(...args));
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    once(channel: string, func: (...args: any[]) => void) {
      const validChannels = ['ipc-example', 'test msg', 'impoort csv', 'export csv'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (_event, ...args) => func(...args));
      }
    },
  },
});
