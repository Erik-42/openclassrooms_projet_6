import React from 'react'
import useApropos from '../../Hooks/useApropos.js';
import Collapse from '../../Components/Collapse/Collapse.jsx'
import bannerAbout from '../../assets/banner/bannerAbout.webp'
import "./apropos.css"

const Apropos = () => {
    const texteApropos = useApropos()

    //affichage (render)
    return (
        <main>
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