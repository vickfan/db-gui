import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Test = () => {
  const [text, setText] = useState('')

  function onSubmit(e){
    e.preventDefault()
    console.log('submit')
    window.electron.ipcRenderer.sendMsg(text)
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
    </div>
  );
};

export default Test