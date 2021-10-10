import React from 'react'
import margarita from '../../medias/margarita.svg';
import Cart from '../cart/Cart'
import './Header.scss'

function Header({cart, setCart}) {

    const title = "margarita"

    return (
        <div className="Header">
            <div className="logo">
                <img className="App-logo" src={margarita} alt="margarita-logo"/>
                <h1>{title
                        .slice(0, 1)
                        .toUpperCase() + title
                        .slice(1)
                        .toLocaleLowerCase()}</h1>
            </div>
            <Cart cart={cart} setCart={setCart}/>
        </div>
    )
}

export default Header