import React, {useState} from 'react'
import './CareScale.scss'
import Tooltip from '../tooltip/Tooltip'

function CareScale({scaleValue, careType}) {

    const range = [1, 2, 3]

    const scaleType = careType === 'light'
        ? '☀️'
        : '💧'

        let info

        switch (scaleValue) {
            case 1:
                info = "sparsely";
                break;
            case 2:
                info = "moderate";
                break;
            case 3:
                info = "a lot of";
                break;
            default:
                break;
        }
    

    const [tooltip,
        setTooltip] = useState(false)

    return (

        <div
            className="care"
            onMouseOver={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}>
            {range.map(rangeItem => (scaleValue >= rangeItem
                ? <span key={rangeItem.toString()}>{scaleType}</span>
                : null))}
            {tooltip && <Tooltip info={info} type={careType}/>}
        </div>
    )
}

export default CareScale