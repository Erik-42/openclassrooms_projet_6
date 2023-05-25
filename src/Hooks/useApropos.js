import axios from "axios";
import { useEffect, useState } from "react";
const Url = "/data/aProposTexte.json"

function useApropos() {
    //state (état et données)
    const [data, setData] = useState([])

    //Comportements
    useEffect(() => {
        //requete axios en prevision de l'API
        axios
            .get(Url)
            .then((response) => {
                setData(response.data)
            });
    }, []);

    return data
}
export default useApropos