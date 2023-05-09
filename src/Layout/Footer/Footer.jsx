import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
import Logo from "../assets/logo/logoWhiteKasa.png"

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/">
                <img id="footerLogo" src={Logo} alt="Logo Kasa" />
            </Link>
            <p>©2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;
