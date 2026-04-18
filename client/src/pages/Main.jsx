import React, { useState } from 'react'
import NavBar from "../components/NavBar";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Organizations from "./Organizations";
import Teams from "./Teams";
import Blogs from "./Blogs";
import Quote from "../components/Quote";
import Footer from '../components/Footer';

function Main() {
  const [open, setOpen] = useState(false)
  const handleDropDown = () => {
    if (!open) {
      setOpen(true)
    }
    else{
      setOpen(false)
    }
  }
  return (
    <>
        <NavBar handleDropDown={handleDropDown} setOpen={setOpen} open={open} />
        <div onClick={() => setOpen(false)}>
        <Home />
        <About />
        <Contact />
        <Organizations />
        <Teams />
        <Blogs />
        <Quote />
        <Footer />
        </div>
    </>
  )
}

export default Main
