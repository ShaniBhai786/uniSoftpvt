import React from 'react'
import aboutImage from "../images/aboutImage.png"

function About() {
  return (
    <div className='about' id='about'>
      <div className="imgcontainer">
        <img src={aboutImage} alt="About Image" />
      </div>
      <div className="three-qoutes">
        <div className="q1">
          <h2>Who we are</h2>
          <p>We are a team of passionate developers and designers dedicated to building modern software solutions for businesses. Our focus is to create reliable, scalable, and user-friendly digital products.</p>
        </div>
        <div className="q2">
          <h2>What we do</h2>
        <p>We develop websites, web applications, and custom software that help businesses improve their online presence and streamline their operations.</p>
        </div>
        <div className="q3">
          <h2>Why Choose us</h2>
        <p>We combine creativity, technology, and strategic thinking to deliver high-quality solutions that help our clients grow and succeed. </p>
        </div>
      </div>
    </div>
  )
}

export default About
