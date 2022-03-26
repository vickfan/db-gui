import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import {Link} from 'react-router-dom'

const Test = () => {
  console.log(typeof Test)

  return (
    <div>
      <div>
      this is my test page
      </div>
      <button>
        <Link to='/'>go back to home page</Link>
      </button>
    </div>
  );
};

export default Test