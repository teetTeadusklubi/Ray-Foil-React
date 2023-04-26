import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-home navbar-link">
        {props.text}
      </Link>
      <Link to="/our-story" className="navigation-links-our-story navbar-link">
        {props.text1}
      </Link>
      <Link to="/product" className="navigation-links-product navbar-link">
        {props.text2}
      </Link>
      <Link to="/contact" className="navigation-links-contact navbar-link">
        {props.text3}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Product',
  text3: 'Contact',
  rootClassName: '',
  text4: 'Pricing',
  text: 'Home',
  text1: 'Our Story',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
