import React from 'react'
import { Link } from 'react-router-dom'
import Thumb from '../../Components/Thumb/Thumb.jsx'
import bannerHome from '../../assets/banner/bannerHome.webp'
import "./accueil.css"

const Accueil = () => {
    return (
        <main>
            <div id="bannerHome">
                <img className='banner' src={bannerHome} alt="Bannière accueil - Chez vous,partout et ailleurs" />
                <h1 id='titleBanner'>Chez vous,partout et ailleurs</h1>
            </div>
            <div className='greySquare'>
                <Thumb name="Titre de la location" />
                <Thumb name="Titre de la location" />
                <Thumb name="Titre de la location" />
                <Thumb name="Titre de la location" />
                <Thumb name="Titre de la location" />
                <Thumb name="Titre de la location" />

            </div>
        </main>
    )
}
export default Accueil;