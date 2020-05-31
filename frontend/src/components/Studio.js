import React from "react";

export default function Studio(props) {
  return (
    <div className="main-section">
      <h2>Studio</h2>
      <div className="row">
        <div className="col-sm-6">
          <br />
          <p>
            Servicing the Victoria and Vancouver independent music scene.
            Featuring a medium sized tracking room, isolation booth, and control
            room.
          </p>
          <br />
          <div className="notice">
            <h6>Fees:</h6>
            <p>$40 an hour for studio time for tracking and mixing</p>
            <h6>Mastering:</h6>
            <p>
              $50/song up to 3 1/2 minutes, then $10 for each additional minute
            </p>
            <p>Vinyl Masters: add $75</p>
            <i>Add 5% GST to all pricing.</i>
          </div>
        </div>
        <div className="col-sm-6">
          <h6 className="gear-title">Gear:</h6>
          <ul>
            <li>Teac Model 15 cosole (modified)</li>
            <li>Teac 85-16 1” 16 track tape machine (modified)</li>
            <li>Fostex 1/4” 2 track tape machine</li>
            <li>Tannoy SRM-12 Monitors</li>
            <li>Empirical Labs FATSO</li>
            <li>Chandler Germanium Preamp</li>
            <li>Chandler Germanium Compressor (modified)</li>
            <li>1176 Compressor Clone</li>
            <li>Chandler Germanium Tone Control EQs (2)</li>
            <li>Pultec EQ clone (2)</li>
            <li>Apogee Rosetta 800 Conversion </li>
            <li>Rode Classic </li>
            <li>Royer 121</li>
            <li>SM7B</li>
            <li>421 (2)</li>
            <li>D112</li>
            <li>Beta 52</li>
            <li>57 (2)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
