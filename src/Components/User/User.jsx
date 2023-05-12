import React from 'react';
import "./user.css"
import greystar from "../../assets/logo/greyStar.png"

const User = () => {
    return (
        <div id="profilUser">
            <p>Alexandre Dumas</p>
            <img id="photoUser" src={greystar} alt="photo profil utilisateur" />
        </div>
    );
};

export default User;