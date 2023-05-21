import React from 'react'
import { Link } from 'react-router-dom';
import "./card.css"

const Card = ({ logement }) => {

    //affichage (render)
    return (

        <article className='cadreCard' key={logement.id}>
            <Link to={`/Logement/${logement.id}`}>
                <img className='coverImage' key={"cover" + logement.id} src={logement.cover} id='coverImage' alt={logement.title} />
                <h2 className='locationName' key={"title" + logement.id}>{logement.title}</h2>
            </Link>
        </article>)
}

export default Card;