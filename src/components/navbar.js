import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar-container ${props.rootClassName} `}>
      <header data-role="Header" className="navigation-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="eager"
          className="navbar-image"
        />
        <div className="navbar-nav">
          <NavigationLinks
            rootClassName="navigation-links-root-class-name10"
            className=""
          ></NavigationLinks>
        </div>
        <div data-role="BurgerMenu" className="navigation-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div
          data-role="MobileMenu"
          className="navigation-mobile-menu navbar-mobile-menu"
        >
          <div className="navbar-nav1">
            <div className="navbar-container">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="navbar-image1"
              />
              <div data-role="CloseMobileMenu" className="navbar-menu-close">
                <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <NavigationLinks
              rootClassName="navigation-links-root-class-name11"
              className=""
            ></NavigationLinks>
          </div>
        </div>
        <button className="navbar-primary-btn button-primary button">
          {props.PrimaryBtn}
        </button>
      </header>
    </div>
  )
}

Navbar.defaultProps = {
  image_src: '/playground_assets/kleeps%2023.01.2023-2.svg',
  image_src1: '/playground_assets/kleeps%2023.01.2023-2.svg',
  image_alt: 'logo',
  image_alt1: 'image',
  text: 'Follow us',
  PrimaryBtn: 'Get started',
  rootClassName: '',
  PrimaryBtn1: 'Get started',
}

Navbar.propTypes = {
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  PrimaryBtn: PropTypes.string,
  rootClassName: PropTypes.string,
  PrimaryBtn1: PropTypes.string,
}

export default Navbar
