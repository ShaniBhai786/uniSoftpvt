import React from 'react'
import logo from "../images/logo.jpeg"
import { Link } from "react-router-dom";

function Instititute_Navbar() {
  return (
    <div className='navBar'>
      <div className="logo-section">
        <img src={logo} alt="logo" />
      </div>
      <div className="navLinks">
        <a href="#school">Home</a>
        <a href="#about">About</a> 
        <Link to="/contact">Contact</Link>
        <a href="#organizations">Organizations</a>
        <a href="#teams">Our Teams</a>
        <a href="#blogs">Blogs</a>
      </div>
      <div className="otherlinks">
        <a href="/">Get a Quote</a>
      </div>
    </div>
  )
}

export default Instititute_Navbar
