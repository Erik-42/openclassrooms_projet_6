import React, { useState } from 'react'
import vectorWhiteUp from '../../assets/logo/vectorWhiteUp.png'
import "./collapse.css"

const Collapse = ({ data, title }) => {
    //state (état et données)
    const [toggle, setToggle] = useState(false);
    // const [heightElement, setHeightElement] = useState();
    // const content = useRef(null);
    const toggleCollapse = () => {
        setToggle(!toggle);
    }

    //Comportements
    // useEffect(() => {
    //     setHeightElement(`${content.current.scrollHeight}px`);
    // }, []);


    //affichage (render)
    return (
        <div>
            <section className='collapse'  >
                <div className="barreCollapse" onClick={toggleCollapse}>
                    <div className="titreCollapse" >{title}</div>
                    <img className={toggle ? "vector rotation" : "vector"} src={vectorWhiteUp} alt="Déployer / Réduire" />
                </div>
                <div className='containerCollapse'>
                    {toggle &&
                        <div className="collapseToggle animated" >
                            {Array.isArray(data) ?
                                <ul> {data.map((elm, key) => <li key={key}>{elm}</li>)}</ul> :
                                <div className='contentTextCollapse' >
                                    <p className='textCollapse '>{data} </p>
                                </div>}
                        </div>}
                </div>
            </section >

        </div >
    )
}
export default Collapse;