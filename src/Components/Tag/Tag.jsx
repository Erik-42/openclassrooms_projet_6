import React from 'react'
import "./tag.css"
import useLogements from "../../Hooks/useLogements.js"

const Tag = (props) => {
    const dataLogement = useLogements()
    //state (état et données)

    //Comportements

    //affichage (render)
    return (
        <div className="Tag">
            <button>Tags{props.tags}</button>
            <button key={dataLogement.id}>Tagues{dataLogement.tag}</button>
        </div>)
}

export default Tag;