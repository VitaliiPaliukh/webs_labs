import React from 'react';
import {useNavigate} from "react-router-dom";
import './CartPage.css';

const CartPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="cart">
                <h1>Shopping Cart</h1>
                <div className="cart_items">
                    <div className="cart_item">
                        <img src={"https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/chainsaws/photos/studio/h110-0522.webp?v=a537c1d2e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD"} id="photo"/>
                        <h2>Title</h2>
                    </div>
                    <div className="cart_item_action">
                        <button className="decrease">-</button>
                        <h3>quantity</h3>
                        <button className="increase">+</button>
                        <h4>price:</h4>
                    </div>
                </div>
                <div className="cart_total">
                    <h2>Total:</h2>
                    <div className="cart_buttons">
                    <button className="back_to_catalog" onClick={() => navigate(-1)}>Back to Catalog</button>
                    <button className="continue">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;