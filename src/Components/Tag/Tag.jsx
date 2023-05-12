import React from 'react'
import "./tag.css"

const Tag = ({ tagName }) => {
    return (
        <div className="Tag">
            <h3>Tags</h3>
            {tagName}
        </div>
    )
}
export default Tag;