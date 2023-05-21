import React from 'react';
import "./rate.css"
import redstar from "../../assets/logo/logoRedKasa.png"
import greystar from "../../assets/logo/logoWhiteKasa.png"

const Rate = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className='votes'>
            {stars.map((level) => rating >= level ?
                (<img key={level.toString()} className='etoile' src={redstar} alt="Etoile de vote rouge" />) :
                (<img key={level.toString()} className='etoile' src={greystar} alt="Etoile de vote grise" />)
            )}
        </div>
    );
};

export default Rate;