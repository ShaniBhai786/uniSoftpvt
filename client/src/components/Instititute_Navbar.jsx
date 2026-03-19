import React, {useState} from 'react'
import logo from "../images/logo.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Institute_NavLinks from './Institute_NavLinks';
import { Link } from 'react-router-dom';

function Instititute_Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
    const show_Menu = () => {
      if (!menuOpen) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };
  return (
    <div className='navBar'>
      <div className="logo-section">
              <div className="b"><FontAwesomeIcon icon={faBars} className="bars" onClick={show_Menu} /></div>
              <div className="i"><img src={logo} alt="logo" /></div>
              <div className="t"><h2>uniSoftpvt</h2></div>
            </div>
      <div className="a">
        <Institute_NavLinks />
      </div>
      {menuOpen && <Institute_NavLinks props={show_Menu} />}
      <div className="otherlinks">
        <Link to="/">Back to main page</Link>
      </div>
    </div>
  )
}

export default Instititute_Navbar
