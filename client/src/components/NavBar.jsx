import React, { useState } from "react";
import logo from "../images/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLinkks from "./NavLinkks";

function NavBar({handleDropDown, setOpen, open}) {
  return (
    <div className="navBar">
      <div className="logo-section">
        <div className="b"><FontAwesomeIcon icon={faBars} className="bars" onClick={() => handleDropDown(true)} /></div>
        <div className="i"><img src={logo} alt="logo" /></div>
        <div className="t"><h2>uniSoftpvt</h2></div>
      </div>
      <div className="a"><NavLinkks /></div>
      {open && <NavLinkks handleDropDown={handleDropDown} />}
      <div className="otherlinks">
        <a href="#quote" id="quote_btn">Free Quote</a>
      </div>
    </div>
  );
}

export default NavBar;
