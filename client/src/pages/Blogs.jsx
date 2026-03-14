import React from "react";

function Blogs() {
  return (
    <section className="blogs" id="blogs">

      {/* Header */}
      <div className="blogs-header">
        <h2>Our Blogs</h2>
        <p>
          Stay updated with the latest insights, trends, and tips about
          software development, web technologies, and digital solutions.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="blogs-container">

        <div className="blog-card">
          <h3>Why Every Business Needs a Website</h3>
          <p>
            In today's digital world, having a professional website is
            essential for businesses to reach customers and build trust.
          </p>
          <a href="#quote" className="read-btn">Read More</a>
        </div>

        <div className="blog-card">
          <h3>Top Web Development Technologies in 2026</h3>
          <p>
            Learn about modern technologies like React, Node.js, and cloud
            platforms that are shaping the future of web development.
          </p>
          <a href="#quote" className="read-btn">Read More</a>
        </div>

        <div className="blog-card">
          <h3>How Custom Software Helps Businesses Grow</h3>
          <p>
            Custom software solutions allow businesses to automate processes,
            improve productivity, and scale faster.
          </p>
          <a href="#quote" className="read-btn">Read More</a>
        </div>

      </div>

      {/* CTA */}
      <div className="blog-cta">
        <h3>Have a project in mind?</h3>
        <p>Let UniSoft help you build the perfect digital solution.</p>
        <a href="#quote" className="quote-btn">Get a Quote</a>
      </div>

    </section>
  );
}

export default Blogs;