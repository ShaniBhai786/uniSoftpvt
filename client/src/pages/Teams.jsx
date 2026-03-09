import React from 'react'

function Teams() {
  return (
    <div className='teams' id='teams'>
      <div className="details">
        <h1>Our Teams</h1>
      <p>We have a diverse and talented team of professionals who are passionate about delivering high-quality software solutions. <br />Our teams include:</p>
      </div>
      {/* <ul>
        <li><strong>Development Team:</strong> Our developers are skilled in various programming languages and frameworks, and they work collaboratively to build robust and scalable software applications.</li>
        <li><strong>Design Team:</strong> Our designers are creative and innovative, responsible for creating visually appealing and user-friendly interfaces that enhance the user experience.</li>
        <li><strong>Project Management Team:</strong> Our project managers ensure that projects are delivered on time and within budget, coordinating between teams and clients to ensure successful project outcomes.</li>
        <li><strong>Quality Assurance Team:</strong> Our QA team is dedicated to testing and ensuring the quality of our software products, identifying and fixing bugs to deliver reliable solutions.</li>
        <li><strong>Support Team:</strong> Our support team provides ongoing assistance to our clients, addressing any issues or concerns they may have and ensuring their satisfaction with our services.</li>
      </ul> */}
      <div className="members">
        <div className="m1">
          <div className="member1"></div>
          <h3></h3>
          <span>CTO</span>
        </div>
        <div className="m2">
          <div className="member2"></div>
          <h3>Roshaan Ahmad</h3>
          <span>CEO</span>
        </div>
        <div className="m3">
          <div className="member3"></div>
          <h3>Mr. </h3>
          <span>MD</span>
        </div>
      </div>
    </div>
  )
}

export default Teams
