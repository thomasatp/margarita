import React, {useState, useEffect} from 'react'
import Header from './header/Header'
import ShoppingList from './shopping-list/ShoppingList'
import Recomandation from './recomantation/Recomandation'
import Footer from './footer/Footer'
import Toast from './toast/Toast'
import './App.scss'

function App() {

    const savedCart = localStorage.getItem('cart')

    const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : [])

    const [position,
        setPosition] = useState('16px')

    useEffect(() => {setPosition('-376px')
    }, [cart])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <div>
            <Recomandation/>
            <Header cart={cart} setCart={setCart}/>
            <ShoppingList cart={cart} setCart={setCart}/>
            <Footer/>
            <Toast
                position={position}
                onClick={() => setPosition("-376px")}
                message={`You have successfully added to your basket`}/>
        </div>
    );
}

export default App;
