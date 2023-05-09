import React from 'react'
import Thumb from '../Components/Thumb.jsx'
import Bannieres from "../assets/Bannieres/bannerAccueilXL.png"

export default function Accueil() {
    return (
        <main>
            <div id="titreBanniereAccueil" >
                <img id="headerLogo" src={Bannieres} alt="Bannière accueil" />
                <h1 id="title-home">Chez vous, partout et ailleurs</h1>
            </div>
            <Thumb />
        </main>
    )
}
