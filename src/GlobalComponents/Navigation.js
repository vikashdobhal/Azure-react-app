import React from 'react'
import { Link } from "react-router-dom";
import ReactLogo from '../images/reactlogo.png';
import PythonLogo from '../images/python.png';
import NodejsLogo from '../images/nodejs.png';
import ChakraLogo from '../images/chakraicon.png';
import javasciptLogo from '../images/javascript-logo.png';
import graphqlLogo from '../images/graphql-logo.png';
import CodeLogo from '../images/codeplay-ground.png';
import devopsLogo from '../images/devops.png';
import gitopsLogo from '../images/gitops.png';
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
            <li className="nav-item">
                <Link to="/javascript"><img src={javasciptLogo} alt=""/> JavaScript</Link>
            </li>
            <li className="nav-item">
                <Link to="/graphql"><img src={graphqlLogo} alt=""/> GraphQL</Link>
            </li>
            <li className="nav-item">
                <Link to="/playground"><img src={CodeLogo} alt=""/> Playground</Link>
            </li>
            <li className="nav-item">
                <Link to="/devops"><img src={devopsLogo} alt=""/> Devops</Link>
            </li>
            <li className="nav-item">
                <Link to="/gitops"><img src={gitopsLogo} alt=""/> Gitops</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation