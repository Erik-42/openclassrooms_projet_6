import React from 'react'
import "../Style/ComponentsStyle/Thumb.css"

export default function Thumb({ photo, titre }) {
    return (
        <div className="thumb">
            <img src={photo} alt="Logements" />
            <h2>{titre}</h2>
        </div>
    )
}
