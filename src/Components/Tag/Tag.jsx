import React from 'react'
import "./tag.css"

const Tag = (props) => {
    //state (état et données)

    //Comportements

    //affichage (render)
    return (
        <div className="Tag">
            <button>Tags{props.tags}</button>
        </div>)
}

export default Tag;