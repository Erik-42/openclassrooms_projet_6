import React from 'react'
import Gallery from '../Components/Gallery.jsx'
import Tag from '../Components/Tag.jsx'
import Collapse from '../Components/Collapse.jsx'

export default function Logement() {
    return (
        <div>
            <h1>Photo logement</h1>
            <Gallery name="informations" />
            <Tag name="tag-name" />
            <Collapse name="collapse" />
        </div>
    )
}
