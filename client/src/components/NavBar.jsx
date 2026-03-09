import React from 'react'
import logo from "../images/logo.jpeg"

function NavBar() {
  return (
    <div className='navBar'>
      <div className="logo-section">
        <img src={logo} alt="logo" />
      </div>
      <div className="navLinks">
        <a href="#home">Home</a>
        <a href="#about">About</a> 
        <a href="#contact">Contact</a>
        <a href="#organizations">Organizations</a>
        <a href="#teams">Our Teams</a>
        <a href="#blogs">Blogs</a>
      </div>
      <div className="otherlinks">
        <a href="#blogs">Get a Quote</a>
      </div>
    </div>
  )
}

export default NavBar
