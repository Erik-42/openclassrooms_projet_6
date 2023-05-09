import React from 'react'
import "../Style/ComponentsStyle/tag.css"

export default function Tag({ tagName }) {
    return (
        <div className="tag">
            {tagName}
        </div>
    )
}
