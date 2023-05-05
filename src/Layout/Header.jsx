import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/LayoutStyle/header.css"
import Logo from "../assets/Logo/LOGO-1.png"

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img id="headerLogo" src={Logo} alt="Logo Kasa" />
            </Link>
            <nav>
                <Link className="navLink" to="/">Accueil</Link>
                <Link className="navLink" to="/Apropos">A Propos</Link>

            </nav>
        </header>
    )
}
