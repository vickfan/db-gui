import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {FileUploader} from 'react-drag-drop-files'

const Test = () => {
  const [text, setText] = useState('')
  const [file, setFile] = useState<any>("")

  function onSubmit(e){
    e.preventDefault()
    console.log('submit')
    window.electron.ipcRenderer.sendMsg(text)
  }

  async function selectFile(importFile: any){
    let path = importFile.path
    console.log(path)
    window.electron.ipcRenderer.importCsv(path)
  }

  function exportCsv(){
    window.electron.ipcRenderer.exportCsv()
  }



  return (
    <div>
      <div>
      this is my test page
      </div>
      <button>
        <Link to='/'>go back to home page</Link>
      </button>
      <input type="text" onChange={e=>setText(e.target.value)}/>
      <button onClick={onSubmit}>Submit</button>
      <FileUploader handleChange={selectFile} name='file'/>
      <button onClick={exportCsv}>Export CSV</button>
    </div>
  );
};

export default Test