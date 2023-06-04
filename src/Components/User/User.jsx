import React from 'react';
import "./user.css"
// import imageProfil from "../../assets/logo/ImageProfil.png"
// import useLogement from "../../Hooks/useLogement.js"
const Host = ({ name, picture }) => {
    // const dataLogement = useLogement()
    //state (état et données)

    //Comportements

    //affichage (render)
    return (
        <div className="profilHost">
            <p className='nameHost'>{name}</p>
            <img className="photoHost" src={picture} alt="Profil utilisateur" />
        </div>
    );
};

export default Host;