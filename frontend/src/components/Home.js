import React from "react";
// import FeaturedItems from './FeaturedItems'
import ItemCarousel from "./ItemCarousel";
// import Carousel from 'react-multi-carousel' /
import { Link } from "react-router-dom";
export default function Home(props) {
  const { featuredItems, setSelectedProduct } = props;
  return (
    <div>
      <div className="row" id="home-row">
        <div className="col-sm-4">
          <div className="notice">
            <h2>COVID-19 Notice</h2>
            <h6>
              The shop is currently open 1-6PM Tuesday through Saturday with a limit of 2 people in the shop at once. Please browse the
              products online first before coming down. 
            </h6>
          </div>
        </div>
        <div id="marrs-info" className="col-sm-5">
          <p>
          An independent music store serving Victoria BC since 2018. Specializing in unique instruments, quality repairs, and recording services.
          </p>
          <div className="notice">
            <h6>
            🎸 WIN This Guitar - Contest Over 🎸
            </h6>
            {/* <p>
              Donate to a BLM org or support a black artist/musician — DM a screen shot or email to 
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:julian.marrsaudio@gmail.com"
              > julian.marrsaudio@gmail.com</a> —— You’ll be entered to win  
              <Link key={29} to={`shop/Guitars/29`}
              > this A&L Antique Cedar Burst Acoustic Guitar with hard shell case</Link> .
              <br/><br/>
               The draw will be made on June 12th.
              <br/><br/>
              TODAY, June 5th, 100% of proceeds through bandcamp are going to the musicians, so it’s a good day to buy music :)  */}
              {/* <br/>
              <br/> */}
              <p><br/>
                Congratulations to the winner! 
                <br/>
                Thanks to all of the participants <b>$1359 was donated! </b><br/><br/>
                Although the contest is over, continued support is needed. Please consider supporting these musicians and organizations.
                <br/><br/>

              <a  id="blm-link" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1OIUBp4kFxmpWJihhq6WLwJQR1Am4DsD59bEYlJZxeGY/htmlview?usp=drivesdk&pru=AAABcqP1x5M%2A6rY5uuHaoJd2z67nprlbog" target="_blank">link to a great spreadsheet that lists out a tonnnnnne of great black artist/musicians, go check them out!</a>
              <br/>
              <br/>
              </p>
               <b> Here is a list of organizations you can donate to locally in BC (get in touch with any Vic suggestions):</b>
              <ul>
                <li>
                  <a  id="blm-link" rel="noopener noreferrer" href="https://www.gofundme.com/f/blmvan" target="_blank">Black Lives Matter Vancouver </a>
                </li>
                <li>
                  <a  id="blm-link" rel="noopener noreferrer"  href="https://ca.gofundme.com/f/covid19-black-community-support-vancouver" target="_blank">Black in BC Community Support for COVID-19</a>
                </li>
                <li>
                  <a  id="blm-link"  rel="noopener noreferrer" href="https://www.hogansalleysociety.org/" target="_blank"> Hogan’s Alley</a>
                </li>
                </ul>
                <b>In the US:</b>
                <ul>
                <li>
                  <a  id="blm-link" rel="noopener noreferrer" href="https://www.joincampaignzero.org/" target="_blank">Campaign Zero</a>
                </li>
                <li>
                  <a  id="blm-link" rel="noopener noreferrer"  href="https://minnesotafreedomfund.org/" target="_blank">Minnesota Freedom Fund</a>
                </li>
                <li>
                  <a  id="blm-link"  rel="noopener noreferrer" href="https://www.blackvisionsmn.org/" target="_blank">Black Vision Collective</a>
                </li>
                <li>
                  <a  id="blm-link" rel="noopener noreferrer"  href="https://bailproject.org/" target="_blank">The Bail Project</a>
                </li>
                <li>
                  <a  id="blm-link"  rel="noopener noreferrer" href="https://www.reclaimtheblock.org/" target="_blank"> Reclaim the Block</a>
                </li>
              </ul>
            
          </div>
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
