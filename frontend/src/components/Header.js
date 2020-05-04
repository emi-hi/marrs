import React from 'react'
import MainNav from './MainNav'

export default function Header(props){
  return(
    <header>
      <div>
        {/* <img src="./images/header1.png" id="left" alt='pedal1'/> */}
        <span>
          <h1>Marrs Audio</h1>
          <h2>2008 Douglas St - Victoria BC</h2>
          <h3>778-928-4574</h3>
          <h3>julian.marrsaudio@gmail.com</h3>
        </span>
        {/* <img src="./images/header2.png" id="right" alt='pedal2'/> */}
      </div>
      <MainNav />
    </header>
  )
}