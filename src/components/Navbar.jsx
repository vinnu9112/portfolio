import React from 'react'
import { Link } from 'react-scroll'
// import logo from '../images/logo1.png'

function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="menu navbar-nav me-auto mb-2 mb-lg-0">
      <li><Link to='main' className='active' smooth={true} duration={1000} >Home</Link></li>
        <li><Link to='features' smooth={true} duration={1000} >Features</Link></li>
        <li><Link to='services' smooth={true} duration={1000} >Services</Link></li>
        <li><Link to='subscribe' smooth={true} duration={1000} >Subscribe</Link></li>
        <li><Link to='contact' smooth={true} duration={1000} >Contact</Link></li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
