import React, { useState } from "react";

function Institute_Teams() {
  const [display, setDisplay] = useState(false);

  return (
    <div className="teams" id="teams">
      <div className="details">
        <h1>Our Teams</h1>
        <p>
          We have a diverse and talented team of professionals who are
          passionate about delivering high-quality software solutions. <br />
          Our teams include:
        </p>
      </div>
      <div className="members">
        <div className="m1">
          <div className="member2"></div>
          <button className="popover-btn" title="Show-Info" onClick={() => setDisplay(1)}>
            <h3>Mr. Alex</h3>
          <span>CTO</span>
          </button>
        </div>
        {display === 1 ? (
            <div className="user-info" id="user-info">
              <button onClick={() => setDisplay(0)} className="close">
                &#10005;
              </button>
              <div className="inner">
                <div className="member2"></div>
              <h2>Chief Technology Officer</h2>
              </div>
              <div className="description">
              <h1>Mr. Alex</h1>
                <p className="user-desc">
                Mr. Alex is the CTO of uniSoft Pvt Ltd, a leading software
                development company. With over 5 years of experience in the
                tech industry, Roshaan has a proven track record of successfully
                leading teams and delivering innovative software solutions to
                clients worldwide. Under his leadership, UniSoft has grown into
                a reputable company known for its commitment to quality and
                customer satisfaction.
              </p>
              </div>
            </div>
          ) : null}
          
        <div className="m2">
          <div className="member2"></div>
          <button
            className="popover-btn"
            title="Show-Info"
            onClick={() => setDisplay(2)}
          >
            <h3>Roshaan Ahmad</h3>
            <span>MD</span>
          </button>
          {display === 2 ? (
            <div className="user-info" id="user-info">
              <button onClick={() => setDisplay(0)} className="close">
                &#10005;
              </button>
              <div className="inner">
                <div className="member2"></div>
              <h2>Managing Director</h2>
              </div>
              <div className="description">
              <h1>Roshaan Ahmad</h1>
                <p className="user-desc">
                Roshaan Ahmad is the CEO of uniSoft Pvt Ltd, a leading software
                development company. With over 5 years of experience in the
                tech industry, Roshaan has a proven track record of successfully
                leading teams and delivering innovative software solutions to
                clients worldwide. Under his leadership, UniSoft has grown into
                a reputable company known for its commitment to quality and
                customer satisfaction.
              </p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="m3">
          <div className="member2"></div>
          <button
            className="popover-btn"
            title="Show-Info"
            onClick={() => setDisplay(3)}
          >
            <h3>Mr. John Doe</h3>
            <span>Principal</span>
          </button>
        </div>
        {display === 3 ? (
            <div className="user-info" id="user-info">
              <button onClick={() => setDisplay(0)} className="close">
                &#10005;
              </button>
              <div className="inner">
                <div className="member2"></div>
              <h2>Principal</h2>
              </div>
              <div className="description">
              <h1>Mr.  John Doe</h1>
                <p className="user-desc">
                Roshaan Ahmad is the CEO of uniSoft Pvt Ltd, a leading software
                development company. With over 5 years of experience in the
                tech industry, Roshaan has a proven track record of successfully
                leading teams and delivering innovative software solutions to
                clients worldwide. Under his leadership, UniSoft has grown into
                a reputable company known for its commitment to quality and
                customer satisfaction.
              </p>
              </div>
            </div>
          ) : null}
      </div>

      <div className="m3">
          <div className="member2"></div>
          <button
            className="popover-btn"
            title="Show-Info"
            onClick={() => setDisplay(5)}
          >
            <h3>Mr. John Doe</h3>
            <span>Principal</span>
          </button>
        </div>

        {display === 5 ? (
            <div className="user-info" id="user-info">
              <button onClick={() => setDisplay(0)} className="close">
                &#10005;
              </button>
              <div className="inner">
                <div className="member2"></div>
              <h2>Principal</h2>
              </div>
              <div className="description">
              <h1>Mr.  John Doe</h1>
                <p className="user-desc">
                Roshaan Ahmad is the CEO of uniSoft Pvt Ltd, a leading software
                development company. With over 5 years of experience in the
                tech industry, Roshaan has a proven track record of successfully
                leading teams and delivering innovative software solutions to
                clients worldwide. Under his leadership, UniSoft has grown into
                a reputable company known for its commitment to quality and
                customer satisfaction.
              </p>
              </div>
            </div>
          ) : null}


      <button onClick={() => setDisplay(4)} className="submit-btn">
        Show Team Info
      </button>
      {display === 4 ? (
        <ul className="team-info">
          <button onClick={() => setDisplay(0)} className="close">
            &#10005;
          </button>
          <li>
            <h3>Development Team</h3>
            <p>
              Our developers are skilled in various programming languages and
              frameworks, and they work collaboratively to build robust and
              scalable software applications.
            </p>
          </li>
          <li>
            <h3>Design Team</h3>
            <p>
              Our designers are creative and innovative, responsible for
              creating visually appealing and user-friendly interfaces that
              enhance the user experience.
            </p>
          </li>
          <li>
            <h3>Project Management Team</h3>
            <p>
              Our project managers ensure that projects are delivered on time
              and within budget, coordinating between teams and clients to
              ensure successful project outcomes.
            </p>
          </li>
          <li>
            <h3>Quality Assurance Team</h3>
            <p>
              Our QA team is dedicated to testing and ensuring the quality of
              our software products, identifying and fixing bugs to deliver
              reliable solutions.
            </p>
          </li>
          <li>
            <h3>Support Team</h3>
            <p>
              Our support team provides ongoing assistance to our clients,
              addressing any issues or concerns they may have and ensuring their
              satisfaction with our services.
            </p>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default Institute_Teams;
