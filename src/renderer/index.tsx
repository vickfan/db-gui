import { render } from 'react-dom';
import App from './App';

render(<App />, document.getElementById('root'));

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.myPing();

window.electron.ipcRenderer.test()

window.electron.ipcRenderer.once('test msg', (arg)=>{
  console.log(arg)
})

window.electron.ipcRenderer.sendMsg('hi')

window.electron.ipcRenderer.once('import csv', (arg)=>{
  console.log(arg)
})

window.electron.ipcRenderer.once('export csv', (arg)=>{
  let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + arg;
    hiddenElement.target = '_blank';
    hiddenElement.download = 'people.csv';
    hiddenElement.click();
})