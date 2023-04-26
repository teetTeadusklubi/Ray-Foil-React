import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FeatureCard41 from '../components/feature-card41'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ray Foil</title>
        <meta property="og:title" content="Ray Foil" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="home-hero">
        <h1 className="home-text">Ride you won&apos;t forget!</h1>
        <span className="home-text01">
          <span>
            Fly over water with the world’s most compact eFoil. Everything you
            need fits in a backpack, so you can take off anytime, anywhere.
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className="home-container1">
          <img
            src="/playground_assets/ray-kanaarid-oras-4442-1000w.jpg"
            alt="image"
            className="home-image"
          />
        </div>
      </div>
      <div className="home-banner">
        <div className="home-container2">
          <h1 className="home-text05">Register to our launch event!</h1>
          <span className="home-text06">
            <span>
              26th of May at Noblessner. First Ray Foils will be available to
              the public at Wambola surf center in Noblessner Tallinn. To
              celebrate we&apos;re throwing a huge party!
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Get ready, we&apos;re really excited!</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="home-container3">
            <a
              href="https://forms.gle/Xg4QDvLfZdcB4wWw7"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link button"
            >
              Register
            </a>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/oras-02933-300h.jpg"
          className="home-image1"
        />
      </div>
      <div className="home-hero1">
        <h1 className="home-text12">
          Gliding has never been easier!
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h1>
        <iframe
          src="https://www.youtube.com/embed/TNt4JdRtx-s"
          allowFullScreen
          className="home-iframe"
        ></iframe>
      </div>
      <div className="home-features">
        <h1 className="home-text13">
          <span>Discover our</span>
          <br></br>
          <span>unique features</span>
        </h1>
        <div className="home-separator"></div>
        <div className="home-container4">
          <div className="home-container5">
            <FeatureCard41
              rootClassName="rootClassName1"
              description="Everything you need to get gliding fits into a backpack. No one has managed that yet!"
              title="Compact"
            ></FeatureCard41>
            <FeatureCard41
              rootClassName="rootClassName4"
              description="With 1 kWh structural battery pack you can enjoy the ride for an hour."
              title="Hour of joy"
            ></FeatureCard41>
            <FeatureCard41
              rootClassName="rootClassName3"
              description="Our motors have 8kW of power giving you the torque you need! "
              title="Power"
            ></FeatureCard41>
            <FeatureCard41
              rootClassName="rootClassName2"
              description="Most efficent foil wings have been developed in collaboration with ZFins."
              title="Efficent"
            ></FeatureCard41>
          </div>
          <img
            alt="image"
            src="/playground_assets/oras-03725-500w.jpg"
            className="home-image2"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Home
