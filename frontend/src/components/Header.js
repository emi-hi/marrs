import React from 'react'
import MainNav from './MainNav'

export default function Header(props){
  return(
    <header>
      <div>
        {/* <img src="./images/header1.png" id="left" alt='pedal1'/> */}
        <div className="header-container">
          <div>
            <h1>Marrs Audio</h1>
          </div>
        <div>
          <div className="contact-info">
          <a target="_blank" href="https://goo.gl/maps/4SbGYfxf2iRZ3JWz8"><i class="fas fa-map-marked"></i> 2008 Douglas St - Victoria BC </a>
          <a href="tel:7789284574"><i class="fas fa-phone"></i> 778-928-4574</a>
          <a target="_blank" href="mailto:julian.marrsaudio@gmail.com"><i class="fas fa-envelope"></i> julian.marrsaudio@gmail.com</a> 
          </div>
        </div>
        {/* <img src="./images/header2.png" id="right" alt='pedal2'/> */}
        </div>
      </div>
      <MainNav />
    </header>
  )
}