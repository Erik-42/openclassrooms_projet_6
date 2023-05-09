import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Style/ComponentsStyle/navigation.css"

const Navigation = () => {
    return (
        <nav className='navigation'>
            <NavLink className="navLink" to="/">accueil</NavLink>
            <NavLink className="navLink" to="Apropos">A propos</NavLink>
        </nav>
    );
};

export default Navigation;