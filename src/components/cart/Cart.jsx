import React, {useState, useEffect} from 'react'
import './Cart.scss'
import quit from '../../medias/quit.svg';
import basket from '../../medias/basket.svg';
import miniQuit from '../../medias/miniQuit.svg';
import minus from '../../medias/minus.svg';
import plus from '../../medias/plus.svg';

function LineCart({
    id,
    name,
    amount,
    price,
    add,
    remove,
    erase
}) {
    return (
        <div id={id} className="line-cart">
            <div className="counter">
                <img onClick={remove} className="mini-icon" src={minus} alt={miniQuit}/>
                <p  >{`${amount} `}</p>
                <img onClick={add} className="mini-icon" src={plus} alt={miniQuit}/></div>
            <p>{name}</p>
            <p className="price">{price}</p>
            <img onClick={erase} className="mini-icon" src={miniQuit} alt={miniQuit}/>
        </div>
    )
}

function LineTotal({total}) {
    return (
        <div className="line-total">
            <p>
                Total
            </p>
            <p className="price">{total}</p>
        </div>
    )
}

function Cart({cart, setCart}) {

    let cartAmount = cart.reduce((acc, cartItem) => acc + cartItem.amount, 0)
    const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)

    const [isOpen,
        setIsOpen] = useState(false)
    const [isVisible,
        setIsVisible] = useState(0)

    useEffect(() => {
        isOpen
            ? setTimeout(() => {
                setIsVisible(1)
            }, 300)
            : setTimeout(() => {
                setIsVisible(0)
            }, 0)
    }, [isOpen])

    useEffect(() => {
        if (total > 0) {document.title = `Margarita - ${total.toFixed(2)} €`}
    }, [total])

    function deleteToCart(id) {
        let filtered = cart.filter((plant) => plant.id !== id)
        setCart(filtered)
    }

    function removeItem(id) {
        const less = cart.filter(plant => plant.id === id)

        if (less[0].amount > 1) {
            less[0].amount -= 1
            setCart([...cart])
        }

    }
    function addItem(id) {
        const less = cart.filter(plant => plant.id === id)
        less[0].amount += 1
        setCart([...cart])
    }

    return isOpen
        ? (
            <div className="Cart">
                <div
                    className="CartContainer"
                    onMouseLeave={() => setIsOpen(false)}
                    style={{
                    padding: isOpen
                        ? '24px, 32px'
                        : "0"
                }}>
                    <div
                        className="CartContent"
                        style={{
                        opacity: isVisible
                    }}>
                        <div className="title">
                            <h2>Cart ({cartAmount})</h2>
                            <img onClick={() => setIsOpen(false)} className="icon" src={quit} alt="quit"/>
                        </div>
                        <div className="cart-content">
                            {cart.map(({
                                id,
                                name,
                                amount,
                                price
                            }, index) => <LineCart
                                key={index}
                                id={id}
                                name={name}
                                amount={amount}
                                remove={() => removeItem(id)}
                                add={() => addItem(id)}
                                erase={() => deleteToCart(id)}
                                price={`${ (amount * price).toFixed(2)} €`}/>)}
                            <LineTotal total={`${total.toFixed(2)} €`}/>
                        </div>

                    </div>

                </div>
            </div>
        )
        : <div className="cart-icon">
            {cart.length > 0 && <div className="cart-number">{cartAmount}</div>}
            <img
                className="icon"
                onClick={() => setIsOpen(true)}
                onMouseEnter={() => setIsOpen(true)}
                src={basket}
                alt="basket"/>
        </div>
}

export default Cart
