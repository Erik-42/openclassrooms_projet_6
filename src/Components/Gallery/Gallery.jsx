import React from 'react'
import "./gallery.css"

const Gallery = (cover, pictures) => {
    return (
        <div className="gallery">
            {cover}
            {pictures}
        </div>
    )
}
export default Gallery;