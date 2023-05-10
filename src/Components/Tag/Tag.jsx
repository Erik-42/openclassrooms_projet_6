import React from 'react'
import "./tag.css"

const Tag = ({ tagName }) => {
    return (
        <div className="Tag">
            {tagName}
        </div>
    )
}
export default Tag;