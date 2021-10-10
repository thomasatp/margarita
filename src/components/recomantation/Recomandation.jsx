import React, {useState, useEffect} from 'react'

import './Recomandation.scss'
import miniQuit from '../../medias/miniQuit.svg';

function Recomandation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth > 2 && currentMonth < 7;

    const [position, setPosition] = useState('-376px')

    useEffect(() => {
        setTimeout(() => setPosition('16px'),2000)
      }, [])


    return (
        isSpring && <div style={{right: position}} className="recomandation">
            <p>C'est le printemps, c'est le moment de rempoter 🌱</p>
            <img className="icon"  onClick={() => setPosition('-376px')} src={miniQuit} alt="quit"/>
        </div>
    )
}

export default Recomandation