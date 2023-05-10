import React from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../Components/Collapse/Collapse.jsx'
import "./apropos.css"
import bannerAbout from '../../assets/banner/bannerAbout.webp'

const Apropos = () => {
    return (
        <div>
            <Link to="/">
                <img id="bannerAbout" src={bannerAbout} alt="Bannière accueil" />
            </Link>
            <Collapse name="Informations" />
        </div>
    )
}
export default Apropos;