import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/LayoutStyle/header.css"
import Logo from "../assets/Logo/LOGO-1.png"
import Navigation from '../Components/Navigation.jsx'

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img id="headerLogo" src={Logo} alt="Logo Kasa" />
            </Link>
            <Navigation />
        </header>
    )
}
