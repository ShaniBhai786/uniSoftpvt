import React, { useState } from "react";
import logo from "../images/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLinkks from "./NavLinkks";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const show_Menu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };
  return (
    <div className="navBar">
      <div className="logo-section">
        <div className="b"><FontAwesomeIcon icon={faBars} className="bars" onClick={show_Menu} /></div>
        <div className="i"><img src={logo} alt="logo" /></div>
        <div className="t"><h2>uniSoftpvt</h2></div>
      </div>
      <div className="a"><NavLinkks /></div>
      {menuOpen && <NavLinkks props={show_Menu} />}
      <div className="otherlinks">
        <a href="#quote">Get a Quote</a>
      </div>
    </div>
  );
}

export default NavBar;
