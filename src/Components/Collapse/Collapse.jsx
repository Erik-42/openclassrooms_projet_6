import React from 'react'
import vectorWhite from '../../assets/logo/vectorWhite.png'
import "./collapse.css"

const Collapse = ({ name }) => {
    return (
        <div className="collapse">
            {name}
        </div>
    )
}
export default Collapse;