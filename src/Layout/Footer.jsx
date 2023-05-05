import React from 'react'
import "../Style/LayoutStyle/footer.css"
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo/LOGO.png"

export default function Footer() {
    return (
        <div className="footer">
            <Link to="/">
                <img id="footerLogo" src={Logo} alt="Logo Kasa" />
            </Link>
            <p>©2020 Kasa. All rights reserved</p>
        </div>
    )
}
