import React from 'react'
import Thumb from '../../Components/Thumb/Thumb.jsx'
import bannerHome from '../../assets/banner/bannerHome.webp'
import "./accueil.css"

const Accueil = () => {
    //state (état et données)

    //Comportements

    //affichage (render)
    return (
        <main>
            {/* affichage de la bannière */}
            <div id="bannerHome">
                <img className='banner' src={bannerHome} alt="Bannière accueil - Chez vous,partout et ailleurs" />
                <h1 id='titleBanner'>Chez vous,partout et ailleurs</h1>
            </div>
            <div className='greySquare'>
                {/* affichage des Thumb dans le cadre gris */}
                <Thumb></Thumb>
            </div>
        </main >
    )
}

export default Accueil;