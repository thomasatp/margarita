import React from 'react'
import './Tooltip.scss'

function Tooltip({info, type}) {



    return (
            <div className="modal">
            <p>{`This plant needs ${info} ${type}`}</p>   
        </div>
    )
}

export default Tooltip