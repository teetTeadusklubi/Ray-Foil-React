import React from 'react'

import { Helmet } from 'react-helmet'

import './product.css'

const Product = (props) => {
  return (
    <div className="product-container">
      <Helmet>
        <title>Product - Ray Foil</title>
        <meta property="og:title" content="Product - Ray Foil" />
      </Helmet>
    </div>
  )
}

export default Product
