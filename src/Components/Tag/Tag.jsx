import React from 'react'
import "./tag.css"

const Tag = ({ tag }) => {

    //affichage (render)
    return (
        <div className="tag">
            <span className='texteTag'>{tag}</span>
        </div>
    )
}

export default Tag;