import React from 'react'
import { Link } from 'react-router-dom'
import Thumb from '../../Components/Thumb/Thumb.jsx'
import bannerHome from '../../assets/banner/bannerHome.webp'
import "./accueil.css"

const Accueil = () => {
    return (
        <div>
            <Link to="/">
                <img id="bannerHome" src={bannerHome} alt="Bannière accueil" />
            </Link>
            <h1>Chez vous,partout et ailleurs</h1>
            <Thumb name="Titre de la location" />
        </div>
    )
}
export default Accueil;