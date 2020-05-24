
import React from "react";
// import FeaturedItems from "./FeaturedItems"
import ItemCarousel from './ItemCarousel'
// import Carousel from "react-multi-carousel" /
export default function Home(props) {
  const { featuredItems, setSelectedProduct } = props;
  return (
    <div >
      <div className="row" id="home-row">
          <div className="col-sm-4">
            <div className="notice">
              <h5>
              COVID-19 Notice 
              </h5>
              <h6>

                The shop is currently open by appointment only. Please browse the products online and give us a call if you'd like to come in for a particular one. Please also call ahead if you would like to drop off a repair or consignment item. 
              </h6>
            </div>
          </div>
          <div className="col-sm-5">
            An independant music store servicing Victoria BC since 2018. We specialize in unique and vintage gear, selling new and used products and doing repairs. We also have a recording studio.  
          </div>
          <div className="col-3">
            <img id="astro-ted" alt="astronaut Ted" src="images/astro-large.jpg"/>
        </div>
        </div>
      <div className="featured-items">
        <h5>

        Featured Items
        </h5>
        

      </div>
      <ItemCarousel
        featuredItems={featuredItems}
        setSelectedProduct={setSelectedProduct}
        />
        
    </div>
  )

};