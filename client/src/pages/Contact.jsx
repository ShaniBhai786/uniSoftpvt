import React from 'react'
import Feedback from '../components/Feedback'
import ContactUs from '../components/ContactUs' 

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="f"><Feedback /></div>
      <div className="c"><ContactUs /></div>
    </div>
  )
}

export default Contact
