import React from 'react'
import DeuxColonnes from '../../Layout/DeuxColonnes/DeuxColonnes.jsx'
import Gallery from '../../Components/Gallery/Gallery.jsx'
import Tag from '../../Components/Tag/Tag.jsx'
import User from '../../Components/User/User.jsx'
import Rate from '../../Components/Rate/Rate.jsx'
import Collapse from '../../Components/Collapse/Collapse.jsx'
import useLogement from "../../Hooks/useLogement.js"
import "./logement.css"

const Logement = () => {
    const dataLogement = useLogement()
    const description = {
        id: dataLogement.id,
        title: "description",
        texte: dataLogement.description
    }
    const equipements = {
        id: dataLogement.id,
        title: "Equipements",
        texte: (dataLogement.equipements) ? dataLogement.equipements.join(" ") : ""
    }
    //affichage (render)
    return (
        <div className='ficheLogement'>
            <div className='galerie'>
                <Gallery pictures={dataLogement.pictures}></Gallery>
            </div>
            <div className='qqocp' >
                <div className='titreLogement'>{dataLogement.title}</div>
                <div className='locationLogement'>{dataLogement.location}</div>
                <div className='user'>
                    <User></User>
                </div>
                <div className='tags'>
                    {dataLogement.tags.map((tag, index) =>
                        <Tag key={index} tag={tag}></Tag>
                    )
                    }
                </div>
                <div className="votes">
                    <h2>votes en étoiles</h2>
                    {/* {dataLogement.rates.map((rating, index) =>
                    <Rate key={index} rating={rating}></Rate>
                )
                } */}
                    <Rate></Rate>
                </div>
            </div>
            <div className='infosLogement'>
                <DeuxColonnes>
                    <Collapse data={description}></Collapse>
                    <Collapse data={equipements}></Collapse>
                </DeuxColonnes>
            </div>

        </div >
    )
}
export default Logement;