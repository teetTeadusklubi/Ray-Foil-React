import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import GalleryCard2 from '../components/gallery-card2'
import FeatureCard41 from '../components/feature-card41'
import Footer from '../components/footer'
import './product.css'

const Product = (props) => {
  return (
    <div className="product-container">
      <Helmet>
        <title>Product - Ray Foil</title>
        <meta property="og:title" content="Product - Ray Foil" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <div className="product-gallery">
        <div className="product-container01">
          <div className="product-container02">
            <div className="product-container03">
              <GalleryCard2
                rootClassName="rootClassName2"
                image_src="/playground_assets/ray-kanaarid-oras-4182-1500w.jpg"
              ></GalleryCard2>
            </div>
            <div className="product-container04">
              <GalleryCard2
                image_src="/playground_assets/ray-kanaarid-oras-4134-1500w.jpg"
                rootClassName="rootClassName3"
              ></GalleryCard2>
            </div>
          </div>
          <div className="product-container05">
            <GalleryCard2
              image_src="/playground_assets/ray-kanaarid-oras-3799-1500h.jpg"
              rootClassName="rootClassName"
            ></GalleryCard2>
          </div>
        </div>
        <div className="product-container06">
          <GalleryCard2
            image_src="/playground_assets/ray-kanaarid-oras-4876-1500h.jpg"
            rootClassName="rootClassName4"
          ></GalleryCard2>
        </div>
      </div>
      <div className="product-features">
        <h1 className="product-text">All these impressive features</h1>
        <div className="product-container07">
          <FeatureCard41
            rootClassName="rootClassName5"
            description="Everything you need to get gliding fits into a backpack. No one has managed that yet!"
            title="Compact"
          ></FeatureCard41>
          <FeatureCard41
            rootClassName="rootClassName6"
            description="With 1 kWh structural battery pack you can enjoy the ride for an hour."
            title="Hour of joy"
          ></FeatureCard41>
          <FeatureCard41
            rootClassName="rootClassName7"
            description="Our motors have 8kW of power giving you the torque you need! "
            title="Power"
          ></FeatureCard41>
          <FeatureCard41
            rootClassName="rootClassName8"
            description="Most efficent foil wings have been developed in collaboration with ZFins."
            title="Efficent"
          ></FeatureCard41>
        </div>
      </div>
      <div className="product-pricing">
        <div className="product-container08">
          <div className="product-container09">
            <h1 className="product-text01">Pricing</h1>
            <span className="product-text02">
              We&apos;ve been very fair with our pricing as we want to offer the
              most for your money. Compared to other manufactures you might
              event consider it to be cheap.
            </span>
          </div>
          <div className="product-container10">
            <div className="product-container11">
              <span className="product-text03">Ray Foil drive unit</span>
              <span className="product-text04">5500€</span>
              <span className="product-text05">8 kW motor</span>
              <span className="product-text06">1 hour of ride time</span>
              <span className="product-text07">foldable propeller</span>
              <span className="product-text08">1 hour charge time</span>
              <button className="product-button button">Learn More</button>
            </div>
            <div className="product-container12">
              <span className="product-text09">Ray Foil combo</span>
              <span className="product-text10">6500€</span>
              <span className="product-text11">Ray Foil drive unit</span>
              <span className="product-text12">Custom board</span>
              <span className="product-text13">Custom wings</span>
              <span className="product-text14">Custom backpack</span>
              <button className="product-button1 button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Product
