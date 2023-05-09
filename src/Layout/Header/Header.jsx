import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import Logo from "../assets/logo/logoRedKasa.png"

const Header = () => {
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
export default Header;