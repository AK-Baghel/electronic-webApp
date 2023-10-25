import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

import "./style.css"

function ProductPage() {
  const { name } = useParams();
  console.log(name);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="productPContainer">
      <div className="productPBox">
        <div className="productPBox1">
          <img className='productPImg' src="https://i0.wp.com/www.gloriouselectronics.com/wp-content/uploads/2022/02/IGBT.jpg?w=500&ssl=1" alt="" />
          <div className="productPTitle">ALL TYPES <span className='productPName'>{name}</span></div>
        </div>
        <div className="productPBox2">
          <input type='text' className="productPSearch" placeholder='Search' />
        </div>
        <div className="productPBox3">
          <ul className="productPRow">
            <li className="productPRowSection">PART NO</li>
            <li className="productPRowSection">MAKE</li>
            <li className="productPRowSection">CATEGORY</li>
            <li className="productPRowSection">DATASHEET</li>
            <li className="productPRowSection">PRODUCT IMAGES</li>
          </ul>

          <ul className="productPRow">
            <li className="productPRowSectionData">1MBI600VF-120-50</li>
            <li className="productPRowSectionData">Fuji	</li>
            <li className="productPRowSectionData productPName">{name}</li>
            <li className="productPRowSectionData productPClick">DATASHEET</li>
            <li className="productPRowSectionData productPClick">IMAGES VIEW</li>
          </ul>
          <ul className="productPRow">
            <li className="productPRowSectionData">2MBI100VA-060-50	</li>
            <li className="productPRowSectionData">Fuji	</li>
            <li className="productPRowSectionData productPName">{name}</li>
            <li className="productPRowSectionData productPClick">DATASHEET</li>
            <li className="productPRowSectionData productPClick">IMAGES VIEW</li>
          </ul>
          <ul className="productPRow">
            <li className="productPRowSectionData">6MBI75VA-120-50	</li>
            <li className="productPRowSectionData">Fuji	</li>
            <li className="productPRowSectionData productPName">{name}</li>
            <li className="productPRowSectionData productPClick">DATASHEET</li>
            <li className="productPRowSectionData productPClick">IMAGES-VIEW</li>
          </ul>

        </div>

        <div className="productPBoxSocials">
          <div className="productPBoxSocialsText">Share this:</div>
          <div className="footerBox2Section1Social">
            <a href='https://github.com/AK-Baghel/PestKit-WebApp/blob/main/src/App.jsx' target='_blank' className='BsFacebook'><BsFacebook className='footerSocial ' /></a>
            <a href='https://github.com/AK-Baghel/PestKit-WebApp/blob/main/src/App.jsx' target='_blank' className='BsInstagram'><BsInstagram className='footerSocial ' /></a>
            <a href='https://github.com/AK-Baghel/PestKit-WebApp/blob/main/src/App.jsx' target='_blank' className='BsTwitter'><BsTwitter className='footerSocial ' /></a>
            <a href='https://github.com/AK-Baghel/PestKit-WebApp/blob/main/src/App.jsx' target='_blank' className='BsYoutube'><BsYoutube className='footerSocial ' /></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductPage