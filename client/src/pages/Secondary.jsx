import React, { useEffect } from 'react'
import School from '../components/School'
import Institute_Navbar from '../components/Instititute_Navbar'
import Footer from '../components/Footer';
import Institute_Teams from './Institute_Teams';

function Secondary() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div>
        <Institute_Navbar />
        <School />
        <Institute_Teams />
        <Footer />
    </div>
  )
}

export default Secondary
