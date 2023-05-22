import React, { useEffect, useRef, useState } from 'react'
import vectorWhiteDown from '../../assets/logo/vectorWhiteUp.png'
import "./collapse.css"

const Collapse = ({ aProposTitle, aProposTexte }) => {
    //state (état et données)
    const [toggle, setToggle] = useState(false);
    const [heightElement, setHeightElement] = useState();
    const content = useRef(null);
    const toggleCollapse = () => {
        setToggle(!toggle);
    }

    //Comportements
    useEffect(() => {
        setHeightElement(`${content.current.scrollHeight}px`);
    }, []);

    //affichage (render)
    return (
        <section className='barreAffichage' >
            <div className="collapse" onClick={toggleCollapse}>
                <div className="titreCollapse">{aProposTitle}</div>
                <img className={toggle ? "vector rotation" : "vector"} src={vectorWhiteDown} alt="Déployer / Réduire" />
            </div>
            <div className='contentCollapse'>
                <div className={toggle ? "collapseToggle animated" : "collapseToggle"} ref={content} style={{ height: toggle ? `${heightElement}` : "0px" }}>
                    <div className='contentTextCollapse'>
                        <p className='textCollapse' aria-hidden={toggle ? "true" : "false"}>{aProposTexte}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Collapse;