import React from "react";
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <button>
      	<Link to='/'>go back to home page</Link>
      </button>
    </div>
  );
};
  
export default About();