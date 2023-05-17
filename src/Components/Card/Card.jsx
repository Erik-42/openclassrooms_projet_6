import React from 'react'
import { Link } from 'react-router-dom';
import "./card.css"

const Card = ({ logement }) => {

    //affichage (render)
    return (

        <div className='cadreCard' key={logement.id}>
            <Link to={`/Logement/${logement.id}`}>
                <img key={"cover" + logement.id} src={logement.cover} id='coverImage' alt={logement.title} />
                <h2 key={"title" + logement.id} className='locationName'>{logement.title}</h2>
            </Link>
        </div>)
}

export default Card;