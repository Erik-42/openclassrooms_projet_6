import axios from "axios";
import { useEffect, useState } from "react";
const Logements = "/data/logements.json"

function useAccueil() {
    //state (état et données)
    const [data, setData] = useState([])

    //Comportements
    useEffect(() => {
        //requete axios en prevision de l'API
        axios
            .get(Logements)
            .then((response) => {
                setData(response.data)
            });
    }, []);

    return data
}
export default useAccueil