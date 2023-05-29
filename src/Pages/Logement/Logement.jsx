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
        texte: (dataLogement.equipments) ? dataLogement.equipments.join(" ") : ""
    }

    //affichage (render)
    return (
        <div className='ficheLogement'>
            <div className='galerieLogement'>
                <Gallery pictures={dataLogement.pictures}></Gallery>
            </div>
            <div className='qqocpLogement' >
                <div className='titreUser'>
                    <div>
                        <div className='titreLogement'>{dataLogement.title}</div>
                        <div className='locationLogement'>{dataLogement.location}</div>
                    </div>
                    <div className='userLogement'>
                        <User></User>
                    </div>
                </div>
                <div className='tagsVotes'>
                    <div className='tagsLogement'>
                        {dataLogement.tags.map((tag, index) =>
                            <Tag key={index} tag={tag}></Tag>
                        )
                        }
                    </div>
                    <div className="votesLogement">
                        {/* {dataLogement.rating.map((rating, index) =>
                        <Rate key={index} rating={rating}></Rate>
                    )
                    } */}
                        <Rate>{dataLogement.rating}</Rate>
                    </div>
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