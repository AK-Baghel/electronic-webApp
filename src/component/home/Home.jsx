import React from 'react'
import Carousel from '../carousel/Carousel'
import MarqueeComp from '../marquee/MarqueeComp'
import ImgDataBox from '../about/imgDataBox/ImgDataBox'
import Products from '../products/Products'
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


    <Products/>


      <ImgDataBox
        text={"Our Vision"}
        desc={"We are market-driven. That means that we provide products and services that meet definitive market needs and seize known market opportunities. We believe that meeting expectations requires that we clearly and completely communicate our vision to others. This dictates extensive planning and development, whether we are developing a product or service, a marketing campaign, or an internal system."}
        img={"https://media.istockphoto.com/id/186226463/tr/foto%C4%9Fraf/vision-background.jpg?s=170667a&w=0&k=20&c=fmwJO1ubDsqYm1t62viVA0XZmNYU9K5esqr8XF6FwVk="}
        reverse={true}
      />

      <ImgDataBox className="homeValues"
        text={"Our Values"}
        desc={"We dispense quality product and valuable service that continuously meet the expectation of our customers. We do so by centralizing on providing value to our customers as proportion of their team. By doing so we surpass competitive standards, ensuring that our customers are pleased with our results. Our team member is devoted to providing value in all areas of the organization, and our customers see us as valuable partners in aiding them into build their businesses."}
        img={"https://assets-global.website-files.com/6047c2070742bf6f0e9457e6/6060916ab90dd2b7ca323565_thumbnail.jpeg"}
        blue={true}
        reverse={false}
      />

      <ImgDataBox
        text={"Our Strategy"}
        desc={"Our strategy has been, and will continue to be, a market position enhancement strategy: creating value for our customers and suppliers at maximum profitability. While the market and technologies may change, our strategy is to provide the highest level of service in the most cost effective manner to our) customer around the world."}
        img={"https://t4.ftcdn.net/jpg/02/57/67/53/360_F_257675395_kcaa2aX85BPj73zNNE5BkyNBmKeszCBa.jpg"}
        reverse={true}
      />

    </div>
  )
}

export default Home
