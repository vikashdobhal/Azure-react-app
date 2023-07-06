import React from 'react'
import { Link } from "react-router-dom";
import ReactLogo from '../images/reactlogo.png';
import PythonLogo from '../images/python.png';
import NodejsLogo from '../images/nodejs.png';
import ChakraLogo from '../images/chakraicon.png';
function Navigation() {
  return (
    <div className='sidebar'>
        <ul className="navbar-nav">
            <li className="nav-item active">
                <Link to="/chakraui"><img src={ChakraLogo} alt=""/> Chakra UI</Link>
            </li>
            <li className="nav-item">
                <Link to="/hooksjs"><img src={ReactLogo} alt=""/> React Hooks</Link>
            </li>
            <li className="nav-item">
                <Link to="/nodejs"><img src={NodejsLogo} alt=""/> Node JS</Link>
            </li>
            <li className="nav-item">
                <Link to="/python"><img src={PythonLogo} alt=""/> Python</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation