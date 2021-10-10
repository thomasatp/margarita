import React, {useState} from 'react'
import './ShoppingList.scss'
import PlantItem from '../plant-item/PlantItem'
import plantList from '../../data/plantList'

function ShoppingList({cart, setCart, position, setPosition}) {

    const [shoppingList,
        setShoppingList] = useState(plantList)

    function addToCart(id, name, price) {
        const plantAdded = cart.find((plant) => plant.name === name)

        if (plantAdded) {
            const filteredPlantAdded = cart.filter((plant) => plant.name !== name);
            setCart([
                {
                    id,
                    name,
                    price,
                    amount: plantAdded.amount + 1
                },
                ...filteredPlantAdded
            ]);
        } else {
            setCart([
                {
                    id,
                    name,
                    price,
                    amount: 1
                },
                ...cart
            ])
        }

    }

    function handleChange(e) {

        e.target.value !== "all"
            ? setShoppingList(plantList.filter((plant) => plant.category === e.target.value))
            : setShoppingList(plantList)
    }

    return (
        <div className="ShoppingContainer">
            <form onChange={handleChange}>
                <div className="radio">
                    <input type="radio" name="sort" defaultChecked={true} value="all" id="all"/>
                    <label htmlFor="all">All</label>
                </div>
                <div className="radio">
                    <input type="radio" name="sort" value="easycare" id="easycare"/>
                    <label htmlFor="easycare">Easy Care</label>
                </div>
                <div className="radio">
                    <input type="radio" name="sort" value="shadow" id="shadow"/>
                    <label htmlFor="shadow">Shadow</label>
                </div>
                <div className="radio">
                    <input type="radio" name="sort" value="petfriendly" id="petfriendly"/>
                    <label htmlFor="petfriendly">Pet Friendly</label>
                </div>
            </form>
            <ul className="ShoppingList">
                {shoppingList.map(({
                    id,
                    name,
                    image,
                    isSpecialOffer,
                    light,
                    water,
                    price
                }) => <PlantItem
                    key={name}
                    cover={image}
                    name={name}
                    price={price}
                    offer={isSpecialOffer}
                    light={light}
                    water={water}
                    onClick={() => addToCart(id, name, price)}/>)}
            </ul>
        </div>

    )
}

export default ShoppingList