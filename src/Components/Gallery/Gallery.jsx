import React, { useState } from 'react'
import vectorWhiteRight from '../../assets/logo/vectorWhiteRight.png'
import vectorWhiteLeft from '../../assets/logo/vectorWhiteLeft.png'

import "./gallery.css"

const Gallery = ({ pictures }) => {
    //state (état et données) UseState
    const nombrePictures = pictures.length // nombre image dans galerie
    const firstPicture = pictures[0] //1ere image
    const lastPicture = pictures[nombrePictures - 1] //dernière image
    const [pictureEnCours, setPictureEnCours] = useState(firstPicture)
    const pictureId = pictures.indexOf(pictureEnCours) //image en cours d'affichage

    const nextPicture = () => {
        if (pictureEnCours === lastPicture) { setPictureEnCours(firstPicture) } else { setPictureEnCours(pictures[pictureId + 1]) }
    } // navigation image suivante

    const previousPicture = () => {
        if (pictureEnCours === lastPicture) { setPictureEnCours(firstPicture) } else { setPictureEnCours(pictures[pictureId - 1]) }
    } // navigation image précédente

    //Comportements UseEffect

    //affichage (render) return
    return (
        <div className="gallery">
            <img src={pictureEnCours} alt={pictureEnCours.title} />
            <div className='controlsGallery'>
                <img src={vectorWhiteRight} alt="Next" onClick={() => nextPicture(pictureEnCours)} />
                <img src={vectorWhiteLeft} alt="Previous" onClick={() => previousPicture(pictureEnCours)} />
                <div className='indexGallery'>{pictureId}/{nombrePictures}</div>
            </div>
        </div>
    )
}
export default Gallery;