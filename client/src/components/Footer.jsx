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
            UniSoft provides professional software development, website design, SEO services, digital marketing, and business automation solutions to help companies grow faster and smarter in the digital world.
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
          <p><FontAwesomeIcon icon={faLocationDot} /> Wyoming, USA</p>
          <p><FontAwesomeIcon icon={faPhone} /> +92 314 8588707</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> unisoftpvt@gmail.com</p>

          <div className="social-icons">
            <a href="https://www.facebook.com/share/1FkdLuFvcd/" target="_main"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://wa.me/923148588707" target="_main"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} UniSoftpvt. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;