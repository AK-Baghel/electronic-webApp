import React from 'react'
import "./style.css"
import ContactTile from './contactTile/ContactTile'
import Form from "../form/Form"
function Contact() {
  return (
    <div className="aboutContainer contactContainer">

      <div className="aboutBanner">Contact Us</div>

      <div className="aboutTrans contactBox1">
        <div className="aboutTransText">Contact Us</div>
        <div className="aboutTransDesc">Get in touch with us at any of our offices or drop a mail and we will get back to you.</div>
      </div>

      <div className="contactBox2">
        <ContactTile email={"irfan@gloriouselectronics.com"} phone={"+919320098587"}/>
        <ContactTile email={"sufyan@gloriouselectronics.com"} phone={"+919320098588"}/>
        <ContactTile email={"irfan@gloriouselectronics.com"} phone={"+919320098587"}/>
        <ContactTile email={"sufyan@gloriouselectronics.com"} phone={"+919320098588"}/>
      </div>

      <Form/>

    </div>
  )
}

export default Contact