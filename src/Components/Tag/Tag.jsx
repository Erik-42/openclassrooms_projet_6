import React from 'react'
import "./tag.css"

const Tag = ({ tag }) => {
    //state (état et données)

    //Comportements

    //affichage (render)
    return (
        <div className="tags">
            <button>{tag}</button>
        </div>
    )
}

export default Tag;