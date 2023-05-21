import React from 'react';
import "./user.css"
import imageProfil from "../../assets/logo/ImageProfil.png"

const User = () => {
    //state (état et données)

    //Comportements

    //affichage (render)
    return (
        <div id="profilUser">
            <p>Alexandre Dumas</p>
            <img id="photoUser" src={imageProfil} alt="Photo profil utilisateur" />
        </div>
    );
};

export default User;