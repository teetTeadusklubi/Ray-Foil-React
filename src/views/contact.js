import React from 'react'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Ray Foil</title>
        <meta property="og:title" content="Contact - Ray Foil" />
      </Helmet>
    </div>
  )
}

export default Contact
