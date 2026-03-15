import React from "react";

function School() {
  return (
    <section className="school" id="school">

      <div className="school-header">
        <h2>uniSoft School & IT Institute</h2>
        <p>
          uniSoft provides quality education in both academic studies and
          modern technology skills. Our mission is to prepare students for
          academic success and future careers in the digital world.
        </p>
      </div>
      <div className="school-cta">
        <h3>Join uniSoft School</h3>
        <p>Providing quality education and modern IT skills for a brighter future.</p>
        <button>Enroll Now</button>
      </div>

      {/* Academic Programs */}
      <div className="program-section">
        <h3>Academic Programs</h3>

        <div className="courses">

          <div className="course-card">
            <h4>Montessori</h4>
            <p>
              Early childhood education focused on creativity, curiosity,
              and foundational learning in a supportive environment.
            </p>
          </div>

          <div className="course-card">
            <h4>Matriculation</h4>
            <p>
              Comprehensive secondary education with experienced teachers
              to prepare students for board examinations.
            </p>
          </div>

          <div className="course-card">
            <h4>Intermediate</h4>
            <p>
              Higher secondary education designed to help students build
              strong academic foundations for university and careers.
            </p>
          </div>

        </div>
      </div>

      {/* IT Courses */}
      <div className="program-section">
        <h3>IT & Skill Development Courses</h3>

        <div className="courses">

          <div className="course-card">
            <h4>Web Development</h4>
            <p>
              Learn HTML, CSS, JavaScript, and modern frameworks to build
              professional websites and applications.
            </p>
          </div>

          <div className="course-card">
            <h4>Programming Fundamentals</h4>
            <p>
              Build strong programming logic and learn modern coding
              practices used in the software industry.
            </p>
          </div>

          <div className="course-card">
            <h4>Computer Applications</h4>
            <p>
              Learn MS Office, internet tools, and essential computer
              skills required for modern workplaces.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default School;