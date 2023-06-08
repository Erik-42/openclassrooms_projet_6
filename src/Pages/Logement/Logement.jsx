import React from 'react'
import Gallery from '../../Components/Gallery/Gallery.jsx'
import Tag from '../../Components/Tag/Tag.jsx'
import User from '../../Components/User/User.jsx'
import Rate from '../../Components/Rate/Rate.jsx'
import Collapse from '../../Components/Collapse/Collapse.jsx'
import useLogement from "../../Hooks/useLogement.js"
import "./logement.css"

const Logement = () => {
    const dataLogement = useLogement()

    //affichage (render)
    return (
        <div className='ficheLogement'>
            <div className='galerieLogement'>
                <Gallery pictures={dataLogement.pictures}></Gallery>
            </div>
            <div className='qqocpLogement' >

                <div className='infosBaseLogement'>
                    <h3 className='titreLogement'>{dataLogement.title}</h3>
                    <p className='locationLogement'>{dataLogement.location}</p>
                    <div className='tagsLogement'>
                        {dataLogement.tags.map((tag, index) =>
                            <Tag key={index} tag={tag}></Tag>
                        )
                        }
                    </div>
                </div>
                <div className='hostRateLogement'>
                    <div className='userLogement'>
                        <User name={dataLogement.host.name} picture={dataLogement.host.picture}></User>
                    </div>
                    <div className="votesLogement">
                        <Rate note={dataLogement.rating}></Rate>
                    </div>
                </div>
            </div>
            <div className='infosLogement'>
                <div className='descriptionLogement'>
                    <Collapse data={dataLogement.description} title="description"></Collapse>
                </div>
                <div className='equipementsLogement'>
                    <Collapse data={dataLogement.equipments} title="equipements">

                    </Collapse>
                </div>
            </div>

        </div >
    )
}
export default Logement;