import React from 'react'
import "./troisColonnes.scss"

function TroisColonnes({ children }) {
    return (
        <article className="troisColonnes">
            {children}
        </article >
    )
}
export default TroisColonnes
