import React from 'react'
import { NavLink } from 'react-router-dom'
import "./error404.css"

const Error404 = () => {
    //state (état et données)

    //Comportements

    //affichage (render)
    return (
        <main>
            <h1 id="error404">404</h1>
            <p id="textError">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink id="errorLink" to="/" label="Retourner sur la page d'accueil">Retourner sur la page d'accueil</NavLink>
        </main>
    )
}
export default Error404;