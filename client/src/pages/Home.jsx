import React from 'react'
import bg from "../images/homeImage.png"
import {ReactTyped} from "react-typed"

function Home() {
  return (
    <div className='home' id='home'>
      <div className="imgcontainer">
        <img src={bg} alt="Background" />
      </div>
      <div className="titleDiv">
        <h1 className="title">uniSoft</h1>
        <p className="salogan">The software of everykind!</p>
      </div>
      <div className="info">
        <h1>
          <ReactTyped
        strings={[ "All Your Business Needs Under a Single Platform!", "Streamline Your Operations with Our Comprehensive Software Solutions!", "Empowering Your Business with Cutting-Edge Software Solutions!" ]}
        typeSpeed={30}
        backSpeed={30}
        loop
        />
        </h1>
        <a href="#blogs"><button className='qoute-btn'>Get a Quote</button></a>
      </div>
    </div>
  )
}

export default Home
