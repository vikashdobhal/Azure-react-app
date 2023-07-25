import React from 'react'
import { Link } from "react-router-dom";
import CodingLogo from '../images/footer-logo.png';
function Header() {
  return (
    <div className='container-fluid p-0'>
        <div className='row'>
            <div className='col-12'>
                <nav className="navbar navbar-dark bg-dark d-flex flex-nowrap">
                    <Link to="/" className='code-logo'><img src={CodingLogo} alt="Coding Zone Logo" /></Link>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header