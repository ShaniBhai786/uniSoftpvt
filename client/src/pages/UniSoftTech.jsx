import React, { useEffect } from 'react'
import Tech from '../components/Tech'
import Instititute_Navbar from '../components/Instititute_Navbar'

function UniSoftTech() {
    useEffect(() => {
    window.scrollTo(0, 0);
    })
  return (
    <>
    <Instititute_Navbar /> 
    <Tech /> 
    </>
  )
}

export default UniSoftTech
