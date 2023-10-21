import React from 'react'
import Carousel from '../carousel/Carousel'
import MarqueeComp from '../marquee/MarqueeComp'
import "./style.css"

function Home() {

  return (
    <div>
      <Carousel />

      <div className="aboutContainer homeContainer">
        <div className="aboutTrans contactBox1">
          <div className=" homeText">Glorious Electronics- Absolute solidity under extreme condition</div>
          <div className="aboutTransDesc">Glorious Electronics is an authorized and independent distributor of electronic components. Glorious Electronics was set up over 75 years ago and is located at lamington road, Mumbai the heart of Electronic market with founder vision to supply genuine quality & reliable electronic components. Glorious Electronics is an authorized distributor of Cosmo and TDK.</div>
        </div>
        <MarqueeComp />
      </div>

    </div>
  )
}

export default Home
