import React from 'react'
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import Form from '../form/Form'
import {useNavigate} from "react-router-dom"

import "./style.css"

function Footer() {
  const navigate=useNavigate();

  return (
    <div className="footerContainer">

      <div className="footerBox1">
        <div className="footerBox1Text">Get in touch with Glorious Customer Support at +919320098587, +919320098586 , 919320098719</div>
      </div>

      <div className="footerBox2">
        <div className="footerBox2Items1">
          <div className="footerBox2Section1Text">Glorious Electronics</div>

          <div className="footerBox2Section1Desc">Glorious Electronics is an authorized and independent distributor of electronic components.</div>

          <div className="footerBox2Section1Social">
            <a href='https://github.com/AK-Baghel/PestKit-WebApp/blob/main/src/App.jsx' target='_blank' className='BsFacebook'><BsFacebook className='footerSocial ' /></a>
            <a href='https://github.com/AK-Baghel/PestKit-WebApp/blob/main/src/App.jsx' target='_blank' className='BsInstagram'><BsInstagram className='footerSocial ' /></a>
            <a href='https://github.com/AK-Baghel/PestKit-WebApp/blob/main/src/App.jsx' target='_blank' className='BsTwitter'><BsTwitter className='footerSocial ' /></a>
            <a href='https://github.com/AK-Baghel/PestKit-WebApp/blob/main/src/App.jsx' target='_blank' className='BsYoutube'><BsYoutube className='footerSocial ' /></a>
          </div>
        </div>

        <div className="footerBox2Items2">
          <div className="footerBox2Section2Text">Quick Link</div>
          <div className="footerBox2Section2Items">
            <div className="footerBox2Section2Item" onClick={()=>{navigate('/')}}>Home</div>
            <div className="footerBox2Section2Item" onClick={()=>{navigate('/about')}}>About US</div>
            <div className="footerBox2Section2Item" onClick={()=>{navigate('/lineCard')}}>Line Card</div>
            <div className="footerBox2Section2Item" onClick={()=>{navigate('/contact')}}>Contact Us</div>
          </div>
        </div>

        <div className="footerBox2Items3">
          <Form />
        </div>
      </div>

      <div className="footerBox3">
        <div className="footerBox3Text">Copyright © Glorious Electronics, Developed By <span className='footerBox2Section3Span'>GSMASH TECHNOLOGIES</span> | All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer