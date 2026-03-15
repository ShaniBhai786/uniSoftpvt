import React from 'react'

function NavLinkks({props}) {
  return (
    <div className="navLinks" onClick={props}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#organizations">Organizations</a>
        <a href="#teams">Our Teams</a>
        <a href="#blogs">Blogs</a>
      </div>
  )
}

export default NavLinkks
