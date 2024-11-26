import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import './CartPage.css';
import {useDispatch, useSelector} from "react-redux";
import {getCart} from "../../../store/cartSlice";
import CartServices from "../../../services/CartServices";
import {getChainsaws} from "../../../store/chainsawSlice";
import {CatalogPage} from "../CatalogPage/CatalogPage";
import {useNavigate} from "react-router-dom";

const CartPage = () => {
    const { cart } = useSelector((state) => state.cartReducer);
    const { chainsaws } = useSelector((state) => state.chainsawReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getCart());
        dispatch(getChainsaws());
    }, [dispatch]);

    const handleDeleteItem = async (id) => {
        try {
            await CartServices.deleteItem(id);
            dispatch(getCart());
        } catch (e) {
            console.error('Error deleting item:', e);
        }
    }

    const handleItemEdit = (e, id, gap) => {
        e.preventDefault();
        const item = cart?.find(item => item.chainsawId === +id);
        console.log(item);
        if (item) {
            if (item.amount + gap <= 0) {
                CartServices.deleteItem(item.id).then(() => dispatch(getCart()));
            } else {
                CartServices.updateItem({id: item.id, chainsawsId: item.chainsawId, amount: item.amount + gap, type: item.type }).then(() => dispatch(getCart()));
            }
        }
    }

    const calculateTotalPrice = () => {
        return cart?.reduce((total, item) => {
            const chainsaw = chainsaws?.find(chainsaw => chainsaw.id === item.chainsawId);
            const price = chainsaw ? chainsaw.RPM : 0;
            return total + (price * item.amount);
        }, 0);
    }



    return (
        <div>
            <div className="cart">
                <h1>Shopping Cart</h1>
                {cart.length === 0 && <h2>Your cart is empty</h2>}
                {cart.map((item, index) => (
                    <div className="cart_items">
                        <div className="cart_item">
                            <img
                                src={"https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/chainsaws/photos/studio/h110-0522.webp?v=a537c1d2e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD"}
                                id="photo"/>
                            <h2>{chainsaws && chainsaws.find(chainsaw => chainsaw.id === item.chainsawId)?.title}</h2>
                        </div>
                        <div className="cart_item_action">
                            <button className="decrease" onClick={(e) => handleItemEdit(e, item.chainsawId, -1)}>-</button>
                            <h3>{item.amount}</h3>
                            <button className="increase" onClick={(e) => handleItemEdit(e, item.chainsawId, +1)}>+</button>
                            <h4>{item.type}</h4>
                            <h4>{chainsaws && (chainsaws.find(chainsaw => chainsaw.id === item.chainsawId)?.RPM ?? 0) * item.amount} $</h4>
                        </div>
                        <button className={"cart_item_delete"} onClick={() => handleDeleteItem(item.id)}>x</button>
                    </div>
                ))}
                <div className="cart_total">
                    {cart.length !== 0 && <h2>Total: {calculateTotalPrice()} $</h2>}
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