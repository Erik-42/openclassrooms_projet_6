import React from 'react'
import useAccueil from "../../Hooks/useAccueil.js"
import bannerHome from '../../assets/banner/bannerHome.webp'
import Card from '../../Components/Card/Card.jsx'
import TroisColonnes from '../../Layout/TroisColonnes/TroisColonnes.jsx'
import "./accueil.css"

const Accueil = () => {
    const dataLogement = useAccueil()

    //affichage (render)
    return (
        <main>
            {/* affichage de la bannière */}
            <div id="bannerHome">
                <h1 id='titleBanner'>Chez vous,partout et ailleurs</h1>
                <img className='banner' src={bannerHome} alt="Bannière accueil - Chez vous,partout et ailleurs" />
            </div>
            <div className='greySquare'>
                {/* affichage des Thumb dans le cadre gris */}
                <TroisColonnes>
                    {dataLogement.map((logement) => (
                        <Card key={logement.id} data={logement}></Card>
                    ))
                    }
                </TroisColonnes>
            </div>
        </main >
    )
}

export default Accueil;