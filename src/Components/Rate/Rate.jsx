import React from 'react';
import "./rate.css"
import redstar from "../../assets/logo/redStar.png"
import greystar from "../../assets/logo/greyStar.png"

const Rate = ({ rating }) => {
    //state (état et données)
    const stars = [1, 2, 3, 4, 5];

    //Comportements

    //affichage (render)
    return (
        <div className='votes'>
            {/* <button>{rating}</button> */}
            {stars.map((level) => rating >= level ?
                (<img key={level.toString()} className='etoile' src={redstar} alt="Etoile de vote rouge" />) :
                (<img key={level.toString()} className='etoile' src={greystar} alt="Etoile de vote grise" />)
            )}
        </div>
    );
};

export default Rate;