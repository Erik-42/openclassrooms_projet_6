import React, { useEffect, useRef, useState } from 'react'
import vectorWhiteDown from '../../assets/logo/vectorWhiteDown.png'
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
                        <p className='textCollapse' aria-hidden={toggle ? "true" : "false"}>Communication is not possible. The shuttle has no power. Using the gravitational pull of a star to slingshot back in time? We are going to Starbase Montgomery for Engineering consultations prompted by minor read-out anomalies. Probes have recorded unusual levels of geological activity in all five planetary systems. Assemble a team. Look at records of the Drema quadrant. Would these scans detect artificial transmissions as well as natural signals?
                            {aProposTexte}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Collapse;