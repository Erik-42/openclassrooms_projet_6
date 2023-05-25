import React, { useState } from 'react'
import vectorWhiteRight from '../../assets/logo/vectorWhiteRight.png'
import vectorWhiteLeft from '../../assets/logo/vectorWhiteLeft.png'
import "./gallery.css"

const Gallery = ({ pictures }) => {

    //state (état et données) UseState
    const [pictureIndex, setPictureIndex] = useState(0)

    // nombre de photos
    const nombrePictures = (pictures) ? pictures.length : 0

    // navigation image suivante
    const nextPicture = () => {
        if (pictureIndex < nombrePictures - 1) { setPictureIndex(pictureIndex + 1) } else { setPictureIndex(0) }
    }

    // navigation image précédente
    const previousPicture = () => {
        if (pictureIndex > 0) { setPictureIndex(pictureIndex - 1) } else {
            setPictureIndex(nombrePictures - 1)
        }
    }

    //affichage (render) return
    return (
        <div className="gallery">
            <img className='imageGallery' src={pictures[pictureIndex]} alt="logement" />
            <div className='controlsGallery'>
                <img className='previousVector' src={vectorWhiteLeft} alt="Previous" onClick={() => previousPicture()} />
                <img className='nextVector' src={vectorWhiteRight} alt="Next" onClick={() => nextPicture()} />
                <div className='indexGallery'>{pictureIndex + 1}/{nombrePictures}</div>
            </div>
        </div>
    )
}

export default Gallery