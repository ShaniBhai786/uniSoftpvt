import React, { useEffect } from 'react'
import Tech from '../components/Tech'
import Instititute_Navbar from '../components/Instititute_Navbar'
import Footer from '../components/Footer';

function UniSoftTech() {
    useEffect(() => {
    window.scrollTo(0, 0);
    })
  return (
    <>
    <Instititute_Navbar /> 
    <Tech />
    <Footer /> 
    </>
  )
}

export default UniSoftTech
