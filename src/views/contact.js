import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Ray Foil</title>
        <meta property="og:title" content="Contact - Ray Foil" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
    </div>
  )
}

export default Contact
