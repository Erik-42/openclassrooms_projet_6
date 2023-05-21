import React from 'react'
//import Gallery from '../../Components/Gallery/Gallery.jsx'
import Tag from '../../Components/Tag/Tag.jsx'
import User from '../../Components/User/User.jsx'
import Rate from '../../Components/Rate/Rate.jsx'
import Collapse from '../../Components/Collapse/Collapse.jsx'
import "./logement.css"
import { useParams } from 'react-router-dom'

// function Logement() {
//     //récupération des data
//     const data = require("../../assets/data/logements.json")
//     //sélection du logement par ID
//     function idLogement(data, logementId) {
//         for (let logement of data) { if (logement.id === logementId)} return logement
//     }
// }
// const { logementId } = useParams()
// const logement = idLogement(data, logementId)

// const dataJson = await fetch("../../assets/data/logements.json")
// const logement = await dataJson.json

const Logement = () => {
    return (
        <div>
            <h1>Logement</h1>
            {/* <Gallery id="gallery" /> */}
            <Tag />
            <User />
            <div id="votes">
                <Rate rating={logement.rating} />
            </div>
            <Collapse />
        </div>
    )
}
export default Logement;