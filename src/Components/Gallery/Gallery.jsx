import React, { useState } from 'react'
import vectorWhiteRight from '../../assets/logo/vectorWhiteRight.png'
import vectorWhiteLeft from '../../assets/logo/vectorWhiteLeft.png'
import "./gallery.css"

const Gallery = ({ picture }) => {

    //state (état et données) UseState
    const nombrePictures = picture.length // nombre image dans galerie
    const firstPicture = picture[0] //1ere image
    const lastPicture = picture[nombrePictures - 1] //dernière image
    const [pictureActuelle, setPictureActuelle] = useState(firstPicture)
    const pictureIndex = picture.indexOf(pictureActuelle) //image en cours d'affichage

    //Comportements UseEffect
    const nextPicture = () => {
        if (pictureActuelle === lastPicture) { setPictureActuelle(firstPicture) } else { setPictureActuelle(picture[pictureIndex + 1]) }
    } // navigation image suivante

    const previousPicture = () => {
        if (pictureActuelle === firstPicture) { setPictureActuelle(lastPicture) } else { setPictureActuelle(picture[pictureIndex - 1]) }
    } // navigation image précédente

    //affichage (render) return
    return (
        <div className="gallery" key={picture.id}>

            <img className='imageGallery' key={"cover" + picture.id} src={picture.cover} alt={picture.title} />

            {/* <img className='imageGallery' key={"cover" + picture.id} src={firstPicture} alt={firstPicture.title} /> */}
            <div className='controlsGallery'>
                <img className='nextVector' src={vectorWhiteRight} alt="Next" onClick={() => nextPicture(pictureActuelle)} />
                <img className='previousVector' src={vectorWhiteLeft} alt="Previous" onClick={() => previousPicture(pictureActuelle)} />
                <div className='indexGallery'>{pictureIndex}/{nombrePictures}</div>
            </div>
        </div>
    )
}
export default Gallery;