import React from 'react'
import useLogements from "../../Hooks/useLogements.js"
import bannerHome from '../../assets/banner/bannerHome.webp'
import Card from '../../Components/Card/Card.jsx'
import TroisColonnes from '../../Layout/TroisColonnes/TroisColonnes.jsx'
import "./accueil.css"

const Accueil = () => {
    const dataLogement = useLogements()

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
                <TroisColonnes>
                    {dataLogement.map((logement) => (
                        <Card data={logement}></Card>
                    ))
                    }
                </TroisColonnes>
            </div>
        </main >
    )
}

export default Accueil;