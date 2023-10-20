import React from 'react'
import "./style.css"
import {MdEmail} from "react-icons/md"
import {IoCall} from "react-icons/io5"
function ContactTile({email,phone}) {
  return (
    <div className="contactTile">
        <div className="contactTileBox">
            <div className="contactTileEmailLogo"><MdEmail/></div>
            <div className="contactTileEmailItems">
                <div className="contactTileEmailTitle">Email</div>
                <div className="contactTileEmailId">{email}</div>
            </div>
        </div>
        <div className="contactTileBox">
        <div className="contactTileEmailLogo"><IoCall/></div>
            <div className="contactTileEmailItems">
                <div className="contactTileEmailTitle">Mobile</div>
                <div className="contactTileEmailId">{phone}</div>
            </div>
        </div>
    </div>
  )
}

export default ContactTile