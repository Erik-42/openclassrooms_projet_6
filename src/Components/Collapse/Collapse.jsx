import React, { useEffect, useRef, useState } from 'react'
import vectorWhiteUp from '../../assets/logo/vectorWhiteUp.png'
import "./collapse.css"

const Collapse = ({ data }) => {
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
        <div>

            <section className='collapse' key={data.id} >
                <div className="barreCollapse" onClick={toggleCollapse}>
                    <div className="titreCollapse" key={"title" + data.id}>{data.title}</div>
                    <img className={toggle ? "vector rotation" : "vector"} src={vectorWhiteUp} alt="Déployer / Réduire" />
                </div>
                <div className='containerCollapse'>
                    <div className={toggle ? "collapseToggle animated" : "collapseToggle"} ref={content} style={{ height: toggle ? `${heightElement}` : "0px" }}>
                        <div className='contentTextCollapse' >
                            <p className='textCollapse' aria-hidden={toggle ? "true" : "false"} key={"texte" + data.id}>{data.texte}</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Collapse;