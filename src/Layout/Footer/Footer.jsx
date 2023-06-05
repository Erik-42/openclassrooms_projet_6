import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo/LOGO-White.svg"
import "./footer.css"

const Footer = () => {

    //affichage (render)
    return (
        <footer>
            <Link to="/">
                <img id="footerLogo" src={Logo} alt="Logo Kasa" />
            </Link>
            <p>©2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;
