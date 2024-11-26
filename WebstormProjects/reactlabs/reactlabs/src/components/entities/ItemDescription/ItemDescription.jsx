// src/components/entities/ItemDescription/ItemDescription.jsx
import React, {useEffect, useState} from 'react';
import CartServices from "../../../services/CartServices";
import './ItemDescription.css';
import {useNavigate} from "react-router-dom";
import ChainsawServices from "../../../services/ChainsawServices";

const ItemDescription = ({ id }) => {
    const navigate = useNavigate();
    const [item, setItem] = useState();
    const [selectedOption, setSelectedOption] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleAddItem = async () => {
        try {
            if (item) {
                if (!inputValue) {
                    alert('Please enter the quantity');
                    return;
                } else if (inputValue < 1) {
                    alert('Quantity must be at least 1');
                    return;
                } else if (!selectedOption) {
                    alert('Please enter the option');
                    return;
                }

                await CartServices.addItem({chainsawId: id, amount: inputValue, type: selectedOption});
                alert('Chainsaw added to cart');

            }
        } catch (e) {
        }


    }

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await ChainsawServices.getChainsawById(id);
                setItem(response.data.data);
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        };

        fetchItem();
    }, [id]);

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="Item-description">
            <img src={"https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/chainsaws/photos/studio/h110-0522.webp?v=a537c1d2e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD"} alt={item.title} id="photo" />
            <div className="details">
                <div className="text">
                    <h1 className="title" id="title">{item.title}</h1>
                    <p className="description" id="description">{item.description}</p>
                </div>
                <div className="filters">
                    <p className="rate" id="rate">{item.rate}</p>
                    <p className="power" id="power">{item.power}</p>
                    <p className="size" id="size">{item.size}</p>
                </div>
                <div className="input-select">
                    <input
                        placeholder="amount"
                        type="number"
                        min={0}
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        id="Input"
                    />
                    <select value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)} id="Select">
                        <option value="" disabled>Select Color</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Orange">Orange</option>
                    </select>
                    <button onClick={() => navigate(-1)}>Go back</button>
                    <button onClick={handleAddItem}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemDescription;
