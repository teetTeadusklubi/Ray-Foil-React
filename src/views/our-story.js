import React from 'react'

import { Helmet } from 'react-helmet'

import './our-story.css'

const OurStory = (props) => {
  return (
    <div className="our-story-container">
      <Helmet>
        <title>Our-Story - Ray Foil</title>
        <meta property="og:title" content="Our-Story - Ray Foil" />
      </Helmet>
    </div>
  )
}

export default OurStory
