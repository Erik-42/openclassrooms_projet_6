import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../../assets/logo/.LOGO-Red.svg"
import "./header.css"

const Header = () => {

    //affichage (render)
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

export default Header;