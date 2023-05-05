import React from 'react'
import Tag from '../Components/Tag.jsx'
import Thumb from '../Components/Thumb.jsx'



export default function Accueil() {
    return (
        <div>
            <h1>Home</h1>
            <Tag name="tag-name" />
            <Thumb name="Titre de la location" />
            <h2>c'est pas simple</h2>
        </div>
    )
}
