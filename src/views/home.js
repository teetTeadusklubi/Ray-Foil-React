import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ray Foil</title>
        <meta property="og:title" content="Ray Foil" />
      </Helmet>
      <div className="home-hero">
        <img
          src="/playground_assets/kleeps%2023.01.2023-2.svg"
          alt="image"
          className="home-image"
        />
        <span className="home-text">Aitäh, et tunned huvi</span>
        <h1 className="home-text1">Avame peagi!</h1>
        <button className="home-button button">Registeeri avapeole</button>
      </div>
    </div>
  )
}

export default Home
