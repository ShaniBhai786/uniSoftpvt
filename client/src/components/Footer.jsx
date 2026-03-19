import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="logo">UniSoft</h2>
          <p>
            uniSoft is a leading software company and IT institute providing
            modern tech solutions and quality education from P.G to Intermediate.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tech">Tech</Link></li>
            <li><Link to="/school">Institute</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Graphic Designing</li>
            <li>IT Training</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p><FontAwesomeIcon icon={faLocationDot} /> Punjab, Pakistan</p>
          <p><FontAwesomeIcon icon={faPhone} /> +92 305 3019712</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@unisoftpvt.com</p>

          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} uniSoft. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;