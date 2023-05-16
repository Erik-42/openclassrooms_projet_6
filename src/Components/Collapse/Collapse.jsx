import React, { useEffect, useRef, useState } from 'react'
import vectorWhite from '../../assets/logo/vectorWhite.png'
import "./collapse.css"

const Collapse = ({ description, equipments }) => {
    const [toggle, setToggle] = useState(false);
    const [heightElement, setHeightElement] = useState();
    const toggleState = () => {
        setToggle(!toggle);
    };
    const refHeight = useRef();

    useEffect(() => {
        // setHeightElement(`${refHeight.current.scrollHeight}px`);
    }, []);

    return (
        <div className='affichage'>
            <span className="collapse">
                <h3>Collapse</h3>
                <img src={vectorWhite} alt="Déployer / Réduire" />
                {description}
            </span>
        </div>

    )
}
export default Collapse;