import React from 'react'
import Gallery from '../../Components/Gallery/Gallery.jsx'
import Tag from '../../Components/Tag/Tag.jsx'
import User from '../../Components/User/User.jsx'
import Rate from '../../Components/Rate/Rate.jsx'
import Collapse from '../../Components/Collapse/Collapse.jsx'
import "./logement.css"

const Logement = () => {
    return (
        <div>
            <h1>Logement</h1>
            <Gallery id="gallery" />
            <Tag />
            <User />
            <Rate />
            <Collapse />
        </div>
    )
}
export default Logement;