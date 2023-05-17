import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./thumb.css"
import Logements from "../../assets/data/logements.json"

const Thumb = () => {
    //state (état et données)
    const [dataLogement, setDataLogement] = useState([])

    //Comportements
    useEffect(() => {
        //requete axios en prevision de l'API
        axios
            .get(Logements)
            .then((response) => {
                setDataLogement(response.data)
            });
    }, []);

    console.log(Logements)

    //affichage (render)
    return (
        <article className="thumb">
            {dataLogement.map((logement) => (
                <div className='cadreCard' key={logement.id}>
                    <Link to={`/Logement/${logement.id}`}>
                        <img key={"cover" + logement.id} src={logement.cover} id='coverImage' alt={logement.title} />
                        <h2 key={"title" + logement.id} className='locationName'>Titre de la location {logement.title}</h2>
                    </Link>
                </div>))}
        </article>
    )
}
export default Thumb;