import React, { useEffect } from 'react'
import School from '../components/School'
import Institute_Navbar from '../components/Instititute_Navbar'
import Footer from '../components/Footer';

function Secondary() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div>
        <Institute_Navbar />
        <School />
        <Footer />
    </div>
  )
}

export default Secondary
