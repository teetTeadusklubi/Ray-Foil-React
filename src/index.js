import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Product from './views/product'
import Home from './views/home'
import OurStory from './views/our-story'
import Contact from './views/contact'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Product} exact path="/product" />
        <Route component={Home} exact path="/" />
        <Route component={OurStory} exact path="/our-story" />
        <Route component={Contact} exact path="/contact" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
