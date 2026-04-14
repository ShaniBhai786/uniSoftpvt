import React from 'react'
import { ReactTyped } from "react-typed"
import { Helmet } from "react-helmet"

function Home() {
  return (
    <div className='home' id='home'>

      <Helmet>
        <title>uniSoft – Software, SEO & Web Development Company</title>
        <meta name="google-site-verification" content="YOUR_CODE" />
        <meta 
          name="description" 
          content="uniSoft offers software development, SEO services, and website solutions to grow your business online." 
        />
        <meta 
          name="keywords" 
          content="software company, SEO services, web development, Pakistan IT company" 
        />
      </Helmet>

      <div className="titleDiv">
        <h1 className="title">
          uniSoft
        </h1>
        <h2 className="salogan">
          Smart Software & Digital Solutions for Business Growth
        </h2>
      </div>

      <div className="infos">
        <div className="info">
          <h2>
            <ReactTyped
              strings={[
                "All-in-One Business Software Solutions for Growth and Efficiency.",
                "Streamline Your Business Operations with Powerful Digital Solutions.",
                "Boost Productivity with Advanced Software, SEO and Web Services.",
                "Complete IT Solutions – Websites, SEO, and Automation.",
                "Transform Your Business with Modern Software Solutions."
              ]}
              typeSpeed={30}
              backSpeed={20}
              loop
            />
          </h2>

          <div className="descriptionTitle">
            <article>
              UniSoft provides professional software development, website design,
              SEO services, and business automation solutions to help companies
              grow faster and smarter in the digital world.
            </article>
          </div>
        </div>

        <a href="#quote" className='qoute-btn-a'>
          <button className='qoute-btn'>Get Free Consultation</button>
        </a>
      </div>

    </div>
  )
}

export default Home