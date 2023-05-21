import React from 'react'
import "./troisColonnes.css"

function TroisColonnes({ children }) {
    return (
        <article className="troisColonnes">
            {children}
        </article >
    )
}
export default TroisColonnes
