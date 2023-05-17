import React, { useEffect, useRef, useState } from 'react'
import vectorWhiteDown from '../../assets/logo/vectorWhiteDown.png'
import "./collapse.css"

const Collapse = (props) => {
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
                <div className="titreCollapse">{props.title}</div>
                <img className={toggle ? "vector rotation" : "vector"} src={vectorWhiteDown} alt="Déployer / Réduire" />
            </div>
            <div className={toggle ? "collapseToggle animated" : "collapseToggle"} ref={content} style={{ height: toggle ? `${heightElement}` : "0px" }}>
                <p aria-hidden={toggle ? "true" : "false"}>
                    {props.content}</p>

            </div>
        </section>

    )
}
export default Collapse;