
import React from "react";



export default function Home(props) {
  return (
    <div className="main-section">
      <div className="home-row">
        <img id="astro-ted" alt="astronaut Ted" src="images/astro-large.jpg"/>
        <div className="notice">
          <h5>
          COVID-19 Notice 
          </h5>
          <h6>

          The shop is currently open by appointment only. Please browse the products online and give us a call if you'd like to come in for a particular one. Please also call ahead if you would like to drop off a repair or consignment item. 
          </h6>
        </div>
      </div>
      <div className="featured-items">
        <h5>

        Featured Items
        </h5>

      </div>
    </div>
  )

};