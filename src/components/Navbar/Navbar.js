import React,{useState} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import Body from '../Body';

const Navbar = () => {
    const [status, setStatus] = useState(false);

    const toggle = () => {
        setStatus( !status);
    }
  return (
      <div className='navbar'>
          
          <nav className='nav'>
              <div className="bars" onClick={toggle}> <i class="fa-solid fa-bars"></i></div>
              
              <ul>
                  <li><Link to = "/">Home</Link></li>
                  <li><Link to = "/documentation">Documentation</Link></li>
                  <li><Link to = "/resources">Resources</Link></li>
                  <li><Link to = "/github">GitHub</Link></li>
              </ul>
          </nav> 
           <div className="menu" style = {{display: status? "block":"none"}}>
              <ul>
                <li><Link to = "/">Home</Link></li>
                  <li><Link to = "/documentation">Documentation</Link></li>
                  <li><Link to = "/resources">Resources</Link></li>
                  <li><Link to = "/github">GitHub</Link></li>
              </ul>
             
          </div> 
           
    </div>
  )
}

export default Navbar