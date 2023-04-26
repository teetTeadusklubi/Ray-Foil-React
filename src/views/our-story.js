import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import TestimonialCard1 from '../components/testimonial-card1'
import Footer from '../components/footer'
import './our-story.css'

const OurStory = (props) => {
  return (
    <div className="our-story-container">
      <Helmet>
        <title>Our-Story - Ray Foil</title>
        <meta property="og:title" content="Our-Story - Ray Foil" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <div className="our-story-testimonial">
        <div className="our-story-container1">
          <h1 className="our-story-text">
            <span>Who are we?</span>
            <br></br>
          </h1>
          <span className="our-story-text03">
            <span>
              A team full of spirit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              Everything we do, we do with heart. When we see a problem our
              first thoughts are how to solve it.
            </span>
            <br></br>
            <br></br>
            <span>
              Our team only consists of the best people in every field.
            </span>
          </span>
          <div className="our-story-container2">
            <TestimonialCard1
              picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
              name="Juhan Peedimaa"
              role="Surfer and entrepenuer"
              quote="Just love it! Riding an eFoil has never been easier!"
            ></TestimonialCard1>
            <TestimonialCard1
              rootClassName="rootClassName"
              name="Zupping"
              role="ZFins engineer"
              quote="The technology being developed here is extrodanry!"
            ></TestimonialCard1>
            <TestimonialCard1
              picture_src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
              name="Donal Trump"
              role="USA President"
              quote="I have never been so happy to invest in startups!"
            ></TestimonialCard1>
          </div>
        </div>
      </div>
      <div className="our-story-stats">
        <div className="our-story-stat">
          <svg viewBox="0 0 1152 1024" className="our-story-icon">
            <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
          </svg>
          <span className="our-story-text11">Customers</span>
          <span className="our-story-text12">Lorem ipsum dolor sit amet.</span>
          <h1 className="our-story-text13">
            <span>50</span>
          </h1>
        </div>
        <div className="our-story-stat1">
          <svg viewBox="0 0 1024 1024" className="our-story-icon3">
            <path d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
          </svg>
          <span className="our-story-text15">Projects</span>
          <span className="our-story-text16">Lorem ipsum dolor sit amet.</span>
          <h1 className="our-story-text17">
            <span>300</span>
          </h1>
        </div>
        <div className="our-story-stat2">
          <svg viewBox="0 0 1024 1024" className="our-story-icon5">
            <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
          </svg>
          <span className="our-story-text19">Cities</span>
          <span className="our-story-text20">Lorem ipsum dolor sit amet.</span>
          <h1 className="our-story-text21">
            <span>20</span>
          </h1>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default OurStory
