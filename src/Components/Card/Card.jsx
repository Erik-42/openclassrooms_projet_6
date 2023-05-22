import React from 'react'
import { Link } from 'react-router-dom';
import "./card.css"

const Card = ({ logement }) => {

    //affichage (render)
    return (
        <div>
            <Link to={`/Logement/${logement.id}`}>
                <article className='cadreCard' key={logement.id}>
                    <img className='coverImage' key={"cover" + logement.id} src={logement.cover} id='coverImage' alt={logement.title} />
                    <h2 className='locationName' key={"title" + logement.id}>{logement.title}</h2>
                </article>
            </Link>
        </div>
    )
}

export default Card;