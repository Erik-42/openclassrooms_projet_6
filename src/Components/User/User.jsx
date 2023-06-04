import React from 'react';
import "./user.css"

const Host = ({ name, picture }) => {

    //affichage (render)
    return (
        <div className="profilHost">
            <p className='nameHost'>{name}</p>
            <img className="photoHost" src={picture} alt="Profil utilisateur" />
        </div>
    );
};

export default Host;