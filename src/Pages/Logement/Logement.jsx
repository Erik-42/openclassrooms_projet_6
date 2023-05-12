import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Gallery from '../../Components/Gallery/Gallery.jsx'
import Tag from '../../Components/Tag/Tag.jsx'
import User from '../../Components/User/User.jsx'
import Rate from '../../Components/Rate/Rate.jsx'
import Collapse from '../../Components/Collapse/Collapse.jsx'
import "./logement.css"

const Logement = () => {
    const params = useParams()
    const [dataLogement, setDataLogement] = useState([]);

    useEffect(() => {
        const getData = async () => {
            //axios permet de prévoir la futur API
            const res = await axios.get("../assets/data/logements.json");
            const appart = res.dataLogement.find(({ id }) => id === params.id);
            res.dataLogement.map(() => setDataLogement(appart));
        };
        getData()
    }, []);

    // useEffect(() => {
    //     axios
    //         .get("../assets/data/logements.json")
    //         .then((res) => setDataLogement(res.dataLogement));
    // }, []);

    return (
        <div key={params.id} className='ficheLogement'>
            <h1>Logement</h1>
            <Gallery cover={dataLogement.cover} />
            <Tag tagName={dataLogement.tags} />
            <User />
            <div id="votes">
                <h2>votes en étoiles</h2>
                <Rate rating={dataLogement.rating} />
            </div>
            <Collapse description={dataLogement.description} />
            <Collapse equipments={dataLogement.equipments} />
        </div>
    )
}
export default Logement;