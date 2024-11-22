import React from 'react';
import photo from "../../assets/logo.svg";

const Cart = () => {
    return (
        <div>
            <img src={photo} alt="cart_photo"/>
            <h1>Title</h1>
            <button>-</button>
            <p>counter</p>
            <button>+</button>

        </div>
    );
};

export default Cart;