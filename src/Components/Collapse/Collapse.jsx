import React from 'react'
import vectorWhite from '../../assets/logo/vectorWhite.png'
import "./collapse.css"

const Collapse = ({ description, equipments }) => {
    return (
        <div className='affichage'>
            <span className="collapse">
                <h3>Collapse</h3>
                <img src={vectorWhite} alt="Déployer / Réduire" />
                {description}
            </span>
            <span className="collapse">
                <h3>Collapse</h3>
                <img src={vectorWhite} alt="Déployer / Réduire" />
                {equipments}
            </span>
        </div>

    )
}
export default Collapse;