import React from 'react';
import '../styling.css'
function Coins(name,price,image,symbol) {
    return (
        <div className='coinsp'>
            <h3>{name}</h3>
            <img src={image} alt="Coin"></img>
            <h4>{price}€</h4>
            <h4>{symbol}</h4>
        </div>
    );
}

export default Coins;