import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard4 from '../components/feature-card4'
import Footer from '../components/footer'
import './home2.css'

const Home2 = (props) => {
  return (
    <div className="home2-container">
      <Helmet>
        <title>Ray Foil</title>
        <meta property="og:title" content="Ray Foil" />
      </Helmet>
      <div className="home2-hero">
        <img
          src="/playground_assets/kleeps%2023.01.2023-2.svg"
          alt="image"
          className="home2-image"
        />
        <span className="home2-text">Ray Foil</span>
        <h1 className="home2-text01">Ride you won&apos;t forget!</h1>
      </div>
      <div className="home2-banner">
        <div className="home2-container1">
          <h1 className="home2-text02">
            <span>
              Get ready!
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Register to our launch event!</span>
            <br></br>
          </h1>
          <span className="home2-text07">
            <span>26th of May at Noblessner.</span>
            <br></br>
            <span>
              First Ray Foils will be available to the public at Wambola surf
              center in Noblessner Tallinn. To celebrate we&apos;re throwing a
              huge party! Get ready, we&apos;re really excited!
            </span>
          </span>
          <div className="home2-container2">
            <a
              href="https://forms.gle/Xg4QDvLfZdcB4wWw7"
              target="_blank"
              rel="noreferrer noopener"
              className="home2-link button"
            >
              Register
            </a>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/oras-02933-300h.jpg"
          className="home2-image1"
        />
      </div>
      <div className="home2-hero1">
        <div className="home2-container3">
          <h1 className="home2-text11">Feel the glide</h1>
          <span className="home2-text12">
            <br></br>
            <span>
              Riding an eFoil has never been easier! Watch this 30 second video
              to feel the glide!
            </span>
          </span>
        </div>
        <iframe
          src="https://www.youtube.com/embed/TNt4JdRtx-s"
          className="home2-iframe"
        ></iframe>
      </div>
      <div className="home2-features">
        <h1 className="home2-text15">
          <span>Discover our</span>
          <br></br>
          <span>unique features</span>
        </h1>
        <div className="home2-separator"></div>
        <div className="home2-container4">
          <div className="home2-container5">
            <FeatureCard4
              rootClassName="rootClassName1"
              title="Compact"
              description="Everything you need to get gliding fits into a backpack. One one has managed that yet!"
            ></FeatureCard4>
            <FeatureCard4
              rootClassName="rootClassName4"
              title="One hour of joy"
              description="With 1 kWh structural battery pack you can enjoy the ride for an hour."
            ></FeatureCard4>
            <FeatureCard4
              rootClassName="rootClassName3"
              title="Powerful"
              description="Our motors have 8kW of power giving you the torque you need! "
            ></FeatureCard4>
            <FeatureCard4
              rootClassName="rootClassName2"
              title="Efficent"
              description="Most efficent foil wings have been developed in collaboration with ZFins."
            ></FeatureCard4>
          </div>
          <img
            alt="image"
            src="/playground_assets/oras-03725-500w.jpg"
            className="home2-image2"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home2
