import React from 'react'
import "./thumb.css"
import cover from "../../assets/data/logements.json";

const Thumb = ({ Title }) => {
    return (
        <article className="thumb">
            <img id='coverImage' src={cover} alt="Image de la location" />
            <div className='cadreCard'>
                <p className='locationName'>Titre de la location {Title}</p>
            </div>
        </article>
    )
}
export default Thumb;