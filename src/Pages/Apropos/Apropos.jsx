import React from 'react'
import Collapse from '../../Components/Collapse/Collapse.jsx'
import "./apropos.css"
import bannerAbout from '../../assets/banner/bannerAbout.webp'
import aProposTexte from "../../assets/data/aProposTexte.json";

const Apropos = () => {
    //state (état et données)

    //Comportements

    //affichage (render)
    return (
        <div>
            <div id="bannerAbout">
                <img className='banner' src={bannerAbout} alt="Bannière accueil" />
            </div>
            <div className='infos'>
                {aProposTexte.map((element) => (
                    <Collapse className="titleCollapse" key={aProposTexte.id} aProposTitle={element.aProposTitle} aProposTexte={element.aProposText} >title collapse</Collapse>))};
                <Collapse>Titre collapse</Collapse>
            </div>
        </div>
    )
}
export default Apropos;