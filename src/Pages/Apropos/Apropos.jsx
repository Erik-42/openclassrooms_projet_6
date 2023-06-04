import React from 'react'
import useApropos from '../../Hooks/useApropos.js';
import bannerAbout from '../../assets/banner/bannerAbout.webp'
import Collapse from '../../Components/Collapse/Collapse.jsx'
import "./apropos.css"

const Apropos = () => {
    const texteApropos = useApropos()
    //state (état et données)

    //Comportements

    //affichage (render)
    return (
        <main>
            {/* affichage de la bannière */}
            <div id="bannerAbout">
                <img className='banner' src={bannerAbout} alt="Bannière accueil" />
            </div>
            <div className='infosApropos'>
                {texteApropos.map((element) => (
                    <Collapse key={element.id} data={element.texte} title={element.title}></Collapse>
                ))
                }
            </div>
        </main>
    )
}
export default Apropos;