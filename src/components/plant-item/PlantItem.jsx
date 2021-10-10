import React from 'react'
import './PlantItem.scss'
/*import CareScale from '../care-scale/CareScale'*/

function PlantItem({
    cover,
    name,
    price,
    offer,
    light,
    water,
    onClick
}) {


    return (
        <li className="ProductTile" onClick={onClick}>
            <img className="cover" src={cover} alt={name}/>
            <div className="InformationContainer">
                <div className="TextContainer">
                    {offer && <div className="tag">On sale</div>}
                    <h2>{name}</h2>
                    <h3>{`${price.toFixed(2)} €`}</h3>
                    {/*<CareScale scaleValue={light} careType="light"/>
                    <CareScale scaleValue={water} careType="water"/>*/}
                </div>
                <button className="Button" onClick={onClick}>Add to cart</button>
            </div>
        </li>
    )
}

export default PlantItem