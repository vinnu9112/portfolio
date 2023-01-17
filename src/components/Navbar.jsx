import React from 'react'
import { Link } from 'react-scroll'
// import logo from '../images/logo1.png'

function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <input type="checkbox" className="menu-btn" id='menu-btn'/>
      <label htmlFor="menu-btn" className='menu-icon'>
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
      <li><Link to='main' className='' smooth={true} duration={1000} >Home</Link></li>
        <li><Link to='features' smooth={true} duration={1000} >About Me</Link></li>
        <li><Link to='services' smooth={true} duration={1000} >Projects</Link></li>
        <li><Link to='subscribe' smooth={true} duration={1000} >Contact</Link></li>
        {/* <li><Link to='contact' smooth={true} duration={1000} >Contact</Link></li> */}
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
