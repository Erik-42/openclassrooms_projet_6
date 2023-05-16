import React from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../Components/Collapse/Collapse.jsx'
import "./apropos.css"
import bannerAbout from '../../assets/banner/bannerAbout.webp'
import aProposTexte from "../../assets/data/aProposTexte.json";

const Apropos = () => {
    return (
        <div>
            <div id="bannerAbout">
                <img className='banner' src={bannerAbout} alt="Bannière accueil" />
            </div>
            <div className='infos'>
                {aProposTexte.map((element) => (
                    <Collapse key={aProposTexte.id} aProposTitle={element.aProposTitle} aProposTexte={element.aProposText} />))};
            </div>
        </div>
    )
}
export default Apropos;