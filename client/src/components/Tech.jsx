import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
    faBook,
  faCode,
  faLaptopCode,
  faMobileScreen,
  faServer
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Tech() {
    const navigate = useNavigate();
    
      const handleBackClick = () => {
        navigate(-1);
      };
      window.scrollTo(0, 0)
  return (
    <section className="tech" id="tech">
      <FontAwesomeIcon icon={faArrowLeft} className='back-icon' onClick={handleBackClick} />

      <div className="tech-header">
        <h2>uniSoft Tech Industry</h2>
        <p>
          We build modern digital solutions to help businesses grow in the
          digital world. Our team specializes in creating reliable,
          scalable, and user-friendly software products.
        </p>
      </div>

      <div className="tech-services">

        <div className="tech-card">
          <FontAwesomeIcon icon={faCode} className="tech-icon" />
          <h3>Web Development</h3>
          <p>
            Professional websites built with modern technologies that
            help businesses create a strong online presence.
          </p>
        </div>

        <div className="tech-card">
          <FontAwesomeIcon icon={faLaptopCode} className="tech-icon" />
          <h3>Web Applications</h3>
          <p>
            Powerful web applications designed to automate business
            processes and improve productivity.
          </p>
        </div>

        <div className="tech-card">
          <FontAwesomeIcon icon={faMobileScreen} className="tech-icon" />
          <h3>App Development</h3>
          <p>
            Custom mobile applications designed for performance,
            usability, and scalability.
          </p>
        </div>

        <div className="tech-card">
          <FontAwesomeIcon icon={faServer} className="tech-icon" />
          <h3>Custom Software</h3>
          <p>
            Tailored software solutions built to solve unique business
            challenges and improve operational efficiency.
          </p>
        </div>
        <Link to="/quote">
        <div className="tech-card-quote">
          <FontAwesomeIcon icon={faBook} className="tech-icon" />
          <h3>Get A Quote</h3>
          <p>
            Get a personalized quote for your project by contacting our sales team. We offer competitive pricing and flexible solutions to meet your
          </p>
        </div>
        </Link>
      </div>

    </section>
  );
}

export default Tech;