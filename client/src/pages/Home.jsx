"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="home" id="home">

      {/* ✅ SEO + META */}
      <Helmet>
        <title>
          UniSoft – Best Software, SEO & Web Development Company in Pakistan
        </title>

        <meta
          name="description"
          content="UniSoft is a leading software company in Pakistan & USA providing web development, SEO services, digital marketing, and business automation solutions to grow your business online."
        />

        <meta
          name="keywords"
          content="
          uniSoft, uniSoft software company, unisoft company, unisoftpvt, unisoft in USA, unisoft software company is US, react.js next.js development services,
          software company Pakistan,
          software house in Lahore,
          SEO services Pakistan,
          web development company Pakistan,
          digital marketing agency Pakistan,
          IT company Lahore,
          best software house in Lahore,
          affordable SEO services,
          custom software development
          "
        />

        <meta
          name="google-site-verification"
          content="WsViIkxJ04PGtVYoEIi1Ki4kHW8UyjuXdEuRnHrTl3I"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ✅ FAVICON */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* ✅ OPEN GRAPH (Facebook / WhatsApp) */}
        <meta property="og:title" content="UniSoft – Software & SEO Company" />
        <meta
          property="og:description"
          content="Grow your business with UniSoft’s SEO, software & web solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unisoftpvt.com" />
        <meta
          property="og:image"
          content="https://unisoftpvt.com/preview.png"
        />
        <link rel="canonical" href="https://unisoftpvt.com/" />
        <meta name="author" content="UniSoft" />
        <meta property="og:image" content="https://unisoftpvt.com/preview.png" />

        {/* ✅ TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "UniSoft",
  "url": "https://unisoftpvt.com",
  "logo": "https://unisoftpvt.com/favicon.ico",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-305-3019712",
    "contactType": "customer service"
  }
}
`}
</script>
      </Helmet>

      {/* ✅ HERO SECTION */}
      <div className="titleDiv">
        <h1 className="title">UniSoft</h1>

        <h2 className="salogan">
          Smart Software & Digital Solutions for Business Growth
        </h2>
      </div>

      {/* ✅ CONTENT SECTION */}
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
              SEO services, digital marketing, and business automation solutions
              to help companies grow faster and smarter in the digital world.
            </article>
          </div>
        </div>

        {/* ✅ CTA BUTTON */}
        <a href="#quote" className="qoute-btn-a">
          <button className="qoute-btn">
            Get Free Consultation </button>
        </a>
      </div>

    </div>
  );
}

export default Home;