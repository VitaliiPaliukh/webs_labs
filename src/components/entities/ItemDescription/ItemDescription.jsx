// src/components/entities/ItemDescription/ItemDescription.jsx
import React, { useState } from 'react';
import { useChainsawDataById } from "../../features/CatalogMenu/CatalogMenu";
import './ItemDescription.css';
import {useNavigate} from "react-router-dom";

const ItemDescription = ({ id }) => {
    const item = useChainsawDataById(id);
    const [selectedOption, setSelectedOption] = useState("");
    const [inputValue, setInputValue] = useState("");

    if (!item) {
        return <div>Item not found</div>;
    }

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    return (
        <div className="Item-description">
            <img src={item.image} alt={item.title} id="photo" />
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
                        placeholder="number"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        id="Input"
                    />
                    <select value={selectedOption} onChange={handleSelectChange} id="Select">
                        <option value="" disabled>Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <button onClick={() => navigate(-1)}>Go back</button>
                </div>
            </div>
        </div>
    );
};

export default ItemDescription;
