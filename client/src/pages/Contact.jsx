import React from 'react'
import Feedback from '../components/Feedback'
import ContactUs from '../components/ContactUs' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"

function Contact() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className='contact' id='contact'>
      <FontAwesomeIcon icon={faArrowLeft} className='back-icon' title="Back" onClick={handleBackClick} />
      <div className="f"><Feedback /></div>
      <div className="c"><ContactUs /></div>
    </div>
  )
}

export default Contact
