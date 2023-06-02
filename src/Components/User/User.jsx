import React from 'react';
import "./user.css"
// import imageProfil from "../../assets/logo/ImageProfil.png"
import useLogement from "../../Hooks/useLogement.js"
const Host = () => {
    const dataLogement = useLogement()
    //state (état et données)

    //Comportements

    //affichage (render)
    return (
        <div className="profilHost">
            <p className='nameHost'>{dataLogement.host.name}</p>
            <img className="photoHost" src={dataLogement.host.picture} alt="Profil utilisateur" />
        </div>
    );
};

export default Host;