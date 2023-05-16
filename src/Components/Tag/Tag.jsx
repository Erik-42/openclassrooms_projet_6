import React from 'react'
import "./tag.css"

const Tag = ({ tagName }) => {
    return (
        <div className="Tag">
            <button>Tags{tagName}</button>
        </div>
    )
}
export default Tag;