import React, { useState } from "react"
import "./style.css"
import { FaBars } from "react-icons/fa6"
import { RiArrowDropDownLine } from "react-icons/ri"
import { IoClose } from "react-icons/io5"
import {useNavigate} from "react-router-dom"

const Header = () => {
    const [show, setShow] = useState(true);
    const [popUp, setPopUp] = useState(false);
    const toggleBar = () => {
        setShow(!show);
    }
    const navigate=useNavigate();

    return (
        <div className="headerContainer">
            <div className="headerItems">
                <div className="headerLogo" onClick={()=>{navigate("/")}}>LOGO</div>
                <div className={`headerAllItem ${show ? "headerMobile " : ""}`}>
                    <div className="headerItem" onClick={()=>{navigate("/")}}>Home</div>
                    <div className="headerItem headerDrop" onClick={() => { setPopUp(!popUp) }} onMouseOver={() => { setPopUp(true) }} onMouseOut={() => { setPopUp(false) }}>All Products<RiArrowDropDownLine className="headerDropDown" /></div>
                    {
                        popUp &&
                        <div className="headerPopUpBox" onMouseOver={() => { setPopUp(true) }} onMouseOut={() => { setPopUp(false) }}>
                            <ul className="headerPopUpBoxItems">
                                <li className="headerPopUpBoxItem">FERRITE CORES TDK</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES COSMO</li>
                                <li className="headerPopUpBoxItem">IGBT</li>
                                <li className="headerPopUpBoxItem">RELAY CARD</li>
                                <li className="headerPopUpBoxItem">DIODE</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES TDK</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES COSMO</li>
                                <li className="headerPopUpBoxItem">IGBT</li>
                                <li className="headerPopUpBoxItem">RELAY CARD</li>
                                <li className="headerPopUpBoxItem">DIODE</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES TDK</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES COSMO</li>
                                <li className="headerPopUpBoxItem">IGBT</li>
                                <li className="headerPopUpBoxItem">RELAY CARD</li>
                                <li className="headerPopUpBoxItem">DIODE</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES TDK</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES COSMO</li>
                                <li className="headerPopUpBoxItem">IGBT</li>
                                <li className="headerPopUpBoxItem">RELAY CARD</li>
                                <li className="headerPopUpBoxItem">DIODE</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES TDK</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES COSMO</li>
                                <li className="headerPopUpBoxItem">IGBT</li>
                                <li className="headerPopUpBoxItem">RELAY CARD</li>
                                <li className="headerPopUpBoxItem">DIODE</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES TDK</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES COSMO</li>
                                <li className="headerPopUpBoxItem">IGBT</li>
                                <li className="headerPopUpBoxItem">RELAY CARD</li>
                                <li className="headerPopUpBoxItem">DIODE</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES TDK</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES COSMO</li>
                                <li className="headerPopUpBoxItem">IGBT</li>
                                <li className="headerPopUpBoxItem">RELAY CARD</li>
                                <li className="headerPopUpBoxItem">DIODE</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES TDK</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES COSMO</li>
                                <li className="headerPopUpBoxItem">IGBT</li>
                                <li className="headerPopUpBoxItem">RELAY CARD</li>
                                <li className="headerPopUpBoxItem">DIODE</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES TDK</li>
                                <li className="headerPopUpBoxItem">FERRITE CORES COSMO</li>
                                <li className="headerPopUpBoxItem">IGBT</li>
                                <li className="headerPopUpBoxItem">RELAY CARD</li>
                                <li className="headerPopUpBoxItem">DIODE</li>
                            </ul>
                        </div>
                    }
                    <div className="headerItem"onClick={()=>{navigate("/about")}} >About Us</div>
                    <div className="headerItem"onClick={()=>{navigate("/lineCard")}} >Line Card</div>
                    <div className="headerItem"onClick={()=>{navigate("/contact")}} >Contact Us</div>
                    <div className="headerItem"><span className="headerCall">CALL NOW:</span> 9876543210</div>
                </div>
            </div>
            {
                show ? <FaBars className="headerBar" onClick={toggleBar} /> : <IoClose className=" headerBar headerCross" onClick={toggleBar} />
            }

        </div>
    )
}
export default Header;