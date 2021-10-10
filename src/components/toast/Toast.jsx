import React from 'react'

import './Toast.scss'
import miniQuit from '../../medias/miniQuit.svg';

function Toast({position, onClick, message}) {
    return (
        <div style={{right: position}} className="recomandation">
            <p>{message}</p>
            <img className="icon"  onClick={onClick} src={miniQuit} alt="quit"/>
        </div>
    )
}

export default Toast