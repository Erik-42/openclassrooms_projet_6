import React from 'react'
import { Link } from 'react-router-dom';
import "./card.css"

const Card = ({ data }) => {

    //affichage (render)
    return (
        <div>
            <Link to={`/Logement/${data.id}`}>
                <article className='cadreCard' key={data.id}>
                    <img className='coverImage' key={"cover" + data.id} src={data.cover} id='coverImage' alt={data.title} />
                    <h2 className='locationName' key={"title" + data.id}>{data.title}</h2>
                </article>
            </Link>
        </div>
    )
}

export default Card;