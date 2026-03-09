import React from 'react'

function ContactUs() {
  return (
    <div className='contactus' >
      <h1>Contact Us</h1>
      <div className="con">
        <label htmlFor="mail">Email:</label>
      <a href="mailto:unisoftpvt@gmail.com" >unisoftpvt@gmail.com</a>
      </div>
      <div className="con">
        <label htmlFor="contact">Contact:</label>
        <a href="tel:+923053019712">+92 305 3019712</a>
      </div>
    </div>
  )
}

export default ContactUs
