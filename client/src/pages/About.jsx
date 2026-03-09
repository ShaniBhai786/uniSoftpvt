import React from 'react'
import aboutImage from "../images/aboutImg.png"

function About() {
  return (
    <div className='about' id='about'>
      <div className="imgcontainer">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  )
}

export default About
