import React from "react";
// import FeaturedItems from './FeaturedItems'
import ItemCarousel from "./ItemCarousel";
// import Carousel from 'react-multi-carousel' /
export default function Home(props) {
  const { featuredItems, setSelectedProduct } = props;
  return (
    <div>
      <div className="row" id="home-row">
        <div className="col-sm-4">
          <div className="notice">
            <h2>COVID-19 Notice</h2>
            <h6>
              The shop is currently open by appointment only. Please browse the
              products online and give us a call if you'd like to come in for a
              particular one. Please also call ahead if you would like to drop
              off a repair or consignment item.
            </h6>
          </div>
        </div>
        <div id="marrs-info" className="col-sm-5">
          <p>
          An independent music store serving Victoria BC since 2018. Specializing in unique instruments, quality repairs, and recording services.
          </p>
        </div>
        <div className="col-3" id="ted-container">
          <img
            id="astro-ted"
            alt="by Lyle Partridge"
            src="/images/astro-large.jpg"
          />
        </div>
      </div>
      <div className="featured-items">
        <h2>Featured Items</h2>
      </div>
      <ItemCarousel
        featuredItems={featuredItems}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
}
