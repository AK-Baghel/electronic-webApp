import React from 'react'
import AboutTile from './aboutTile/AboutTile'
import {RiShakeHandsLine} from"react-icons/ri"
import {GiStairsGoal} from"react-icons/gi"
import {BsGift} from"react-icons/bs"

import "./style.css"

function About() {
  return (
    <div className="aboutContainer">

      <div className="aboutBanner">About Us</div>

      <div className="aboutTrans">
        <div className="aboutTransText">Transparency</div>
        <div className="aboutTransDesc">Openness with our clients. You raise issues and we provide solutions promptly. Transparency means providing context for the decisions we are making. Transparency helps us to eliminate any suspicious or anxieties of our customers might have about the value of what we are offering. By laying about the truth about our product and services.</div>
      </div>

      <div className="aboutTiles">
        <AboutTile title={"Commitment"} desc={"Our word and hard work over everything else. Our clients and visions are our guiding beacons."} logo={<RiShakeHandsLine/>}/>
        <AboutTile title={"Self Improvement"} desc={"Never stop learning, never stop evolving into who we want to be."} logo={<GiStairsGoal/>}/>
        <AboutTile title={"Over Delivery"} desc={"Deliver more value than our team & clients expect every day over every delivery."} logo={<BsGift/>}/>
      </div>

      <div className="aboutQE">
        <div className="aboutQEBox1">
          <div className="aboutQEText">Quality and Experience</div>
      <div className="aboutTransLine"></div>
          <div className="aboutQEDesc">Glorious Electronics have always been Customer driven and Quality focused. We dispense 100% original component. We ensure the quality of the product be up to the mark and exemplary. Quality comprise of performance, aesthetics, special features, conformance, reliability, durability, perceived quality thus Glorious Electronics offers all. Our cost effective solutions keeps our customer frontward in a tough and competitive market. Quality is a crucial parameter which differentiates Glorious Electronics from our competitors. We offer products that have a good value where the benefits and usage are worth.</div>
        </div>
        <div className="aboutQEBox2"><img src="https://researchoutreach.org/wp-content/uploads/2021/06/shutterstock_1490111117.jpg" alt="" /></div>
      </div>

      <div className="aboutECS">
        <div className="aboutECSText">Excellent customer service</div>
        <div className="aboutECSDesc">Glorious Electronics focuses on customer service at every step rigorously. Whether you need assistance finding the right part or recommendation for your component Glorious Electronics customer service and technical support team are at your disposal from 10:00 AM to 8:00 PM. For us customer service is a sum total of what our organization does to meet our customer expectations and produce customer satisfaction. We tend to deliver consistent customer experience across all channels. We use right technology to create better experience for our customers. For our organization it is very imperative to do everything which revolves around customer so that we can make our customer happy and satisfied. We are initiating to understand our customer expectations and experience and knowing how to exceed that. We try to stay ahead of our competition by implementing new initiatives based off the feedback from our customer and industry trends. We appreciate feedback from our customer on how we can improve their online shopping experience. With the right expertise we use opportunities to enhance our customer experience. Being an authorized and independent distributor of electronic components customer can rest assure that the product they purchase is authentic. As a result, we are constantly challenged to boost all facet of our business. Our internal team has adapted our culture of continuous improvements to ensure our products, process and services deliver the best to our customers. We contrivance elements like understanding, responding, respect, positivity, listening, etc to thrive best customer service. We introduce human touch to for a better customer service.</div>
      </div>

    </div>
  )
}

export default About