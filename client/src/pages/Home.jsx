import React from 'react'
import { ReactTyped } from "react-typed"
import { Helmet } from "react-helmet"

function Home() {
  return (
    <div className='home' id='home'>

      <Helmet>
        <title>uniSoft – Best Software, SEO & Web Development Company in Pakistan</title>
        <meta name="google-site-verification" content="WsViIkxJ04PGtVYoEIi1Ki4kHW8UyjuXdEuRnHrTl3I" />
        <meta 
          name="description" 
          content="uniSoft offers software development, SEO services, diital marketing services, website solutions to grow your business online." 
        />
        <meta 
          name="keywords"
          content="unisoft company, software company, SEO services, web development, Pakistan IT company, unisoft software company, unisoft in US, unisoftpvt in US, best software company, universal software company, the software of every kind, unisoftpvt"  />

          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />

           <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <meta property="og:title" content="uniSoft – Software & SEO Company" />
  <meta property="og:description" content="Grow your business with UniSoft’s SEO, software & web solutions." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://unisoftpvt.com" />
  <meta property="og:image" content="https://unisoftpvt.com/preview.png" />

  <meta name="twitter:card" content="summary_large_image" />
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
          <button className='qoute-btn'>Get Free SEO & Software Consultation</button>
        </a>
      </div>

    </div>
  )
}

export default Home