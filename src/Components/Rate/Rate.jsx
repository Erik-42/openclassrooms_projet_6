import React from 'react';
import redstar from "../../assets/logo/star_rate-24px 5 red.svg"
import greystar from "../../assets/logo/star_rate-24px 2 grey.svg"
import "./rate.css"

const Rate = ({ note }) => {
    //state (état et données)
    const stars = [1, 2, 3, 4, 5];

    //affichage (render)
    return (
        <div className='votes'>
            {stars.map((level) => note >= level ?
                (<img key={level.toString()} className='etoiles' src={redstar} alt="Etoiles de vote rouge" />) :
                (<img key={level.toString()} className='etoiles' src={greystar} alt="Etoiles de vote grise" />)
            )}
        </div>
    );
};

export default Rate;