import React from 'react'
import NavBar from "../components/NavBar";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Organizations from "./Organizations";
import Teams from "./Teams";
import Blogs from "./Blogs";
import Quote from "../components/Quote";

function Main() {
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Contact />
        <Organizations />
        <Teams />
        <Blogs />
        <Quote />
    </div>
  )
}

export default Main
