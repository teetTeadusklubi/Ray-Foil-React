import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-home navbar-link">{props.text}</span>
      <span className="navigation-links-our-story navbar-link">
        {props.text1}
      </span>
      <span className="navigation-links-product navbar-link">
        {props.text2}
      </span>
      <span className="navigation-links-contact navbar-link">
        {props.text3}
      </span>
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
