import React from "react";
import { Link } from "react-router-dom";

function Organizations() {
  return (
    <section className="organizations" id="organizations">

      <div className="org-header">
        <h2>Our Organizations</h2>
        <p>
          UniSoft operates in both the technology and education sectors,
          providing innovative software solutions and quality IT education
          for the next generation of developers.
        </p>
      </div>

      <div className="org-container">

        {/* Tech Company */}
        <div className="org-card">
          <h3>UniSoft Tech Industry</h3>
          <p>
            Our technology division specializes in building modern software
            solutions including websites, web applications, and custom
            software for businesses. We help companies grow digitally by
            delivering reliable and scalable technology products.
          </p>
          <Link to="/tech" target="main"><button>Learn More</button></Link>
        </div>

        {/* School / Institute */}
        <div className="org-card">
          <h3>UniSoft IT Institute</h3>
          <p>
            Our institute focuses on teaching practical IT skills including
            programming, web development, and modern technologies. We aim
            to prepare students for successful careers in the technology
            industry.
          </p>
          <Link to="/school" target="blabk"><button>Explore Schools</button></Link>
        </div>

      </div>

    </section>
  );
}

export default Organizations;