import axios from "axios";
import { useEffect, useState } from "react";
const Logements = "/data/logements.json"

function useAccueil() {
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

    return dataLogement
}
export default useAccueil