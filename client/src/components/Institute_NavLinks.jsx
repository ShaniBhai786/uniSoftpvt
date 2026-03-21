import React from 'react'
import { Link } from "react-router-dom";

function Institute_NavLinks({props}) {
  return (
    <div className="navLinks" onClick={props}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <Link to="/contact">Contact</Link>
        <a href="#teams">Our Teams</a>
        <a href="#blogs">Blogs</a>
      </div>
  )
}

export default Institute_NavLinks
