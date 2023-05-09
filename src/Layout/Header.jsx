import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../Style/LayoutStyle/header.css"
import Logo from "../assets/Logo/LOGO-1.png"

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img id="headerLogo" src={Logo} alt="Logo Kasa" />
            </Link>
            <nav>
                <NavLink className="navLink" to="/">Accueil</NavLink>
                <NavLink className="navLink" to="/Apropos">A Propos</NavLink>

            </nav>
        </header>
    )
}
