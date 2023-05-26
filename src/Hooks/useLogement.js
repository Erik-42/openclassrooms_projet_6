import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Url = "/data/logements.json"

function useLogement() {
    const { id } = useParams()

    //state (état et données)
    const [data, setData] = useState({
        id: "",
        title: "",
        cover: "",
        pictures: [],
        description: "",
        host: {
            name: "",
            picture: ""
        },
        rating: "",
        location: "",
        equipments: [],
        tags: []
    })

    //Comportements
    useEffect(() => {
        //requete axios en prevision de l'API
        axios
            .get(Url)
            .then((response) => {
                const logement = response.data.find((element) => element.id === id)
                setData(logement)
            });
    }, [id]);

    return data
}

export default useLogement