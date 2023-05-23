import React from 'react'
import DeuxColonnes from '../../Layout/DeuxColonnes/DeuxColonnes.jsx'
import Gallery from '../../Components/Gallery/Gallery.jsx'
import Tag from '../../Components/Tag/Tag.jsx'
import User from '../../Components/User/User.jsx'
import Rate from '../../Components/Rate/Rate.jsx'
import Collapse from '../../Components/Collapse/Collapse.jsx'
import useLogements from "../../Hooks/useLogements.js"
import "./logement.css"

const Logement = () => {
    const dataLogement = useLogements()

    //affichage (render)
    return (
        <div className='ficheLogement'>
            {dataLogement.map((picture) => (
                <Gallery picture={picture}></Gallery>
            ))
            }
            <Tag></Tag>
            <User></User>
            <div id="votes">
                <h2>votes en étoiles</h2>
                <Rate />
            </div>
            <div className='infosLogement'>
                <Collapse></Collapse>
                <Collapse></Collapse>
            </div>
            {/* <div className='infos'>
                {dataLogement.map((logement) => (
                    <Collapse className="titleCollapse" key={dataLogement.id} logementTitle={logement.logementTitle} logementDescription={logement.logementDescription} ></Collapse>))}
            </div> */}
        </div>
    )
}
export default Logement;