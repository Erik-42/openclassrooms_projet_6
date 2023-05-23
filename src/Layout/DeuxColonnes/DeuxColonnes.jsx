import React from 'react'
import "./deuxColonnes.css"

export default function DeuxColonnes({ children }) {
    return (
        <article className="deuxColonnes">
            {children}
        </article >
    )
}
