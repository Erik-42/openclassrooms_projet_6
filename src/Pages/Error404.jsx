import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/PagesStyle/error404.css"

export default function Error404() {
    return (
        <main>
            <h1 id="error404">404</h1>
            <p id="textError">Oups! La page que vous demandez n'existe pas.</p>
            <Link id="errorLink" to="/" label="Retourner sur la page d'accueil">Retourner sur la page d'accueil</Link>
        </main>
    )
}
