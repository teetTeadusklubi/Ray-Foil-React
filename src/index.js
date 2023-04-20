import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Product from './views/product'
import Home2 from './views/home2'
import OurStory from './views/our-story'
import Home from './views/home'
import Contact from './views/contact'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Product} exact path="/product" />
        <Route component={Home2} exact path="/" />
        <Route component={OurStory} exact path="/our-story" />
        <Route component={Home} exact path="/home" />
        <Route component={Contact} exact path="/contact" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
