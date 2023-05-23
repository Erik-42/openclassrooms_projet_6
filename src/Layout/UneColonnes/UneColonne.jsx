import React from 'react'
import "./uneColonnes.css"

export default function UneColonne({ children }) {
    return (
        <article className="uneColonne">
            {children}
        </article >
    )
}
