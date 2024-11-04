import React from 'react';
import Chainsaw from '../../entities/Chainsaw/Chainsaw';
import './CatalogMenu.css';
import deposit from "../../assets/depositphotos.jpg";

const CatalogMenu = () => {
    const chainsawData = [
        {
            id: "1",
            image: deposit,
            title: "Title 1",
            rate: "Rate 1",
            power: "Power 1",
            size: "Size 1"
        },
        {
            id: "2",
            image: deposit,
            title: "Title 2",
            rate: "Rate 2",
            power: "Power 2",
            size: "Size 2"
        },
        {
            id: "3",
            image: deposit,
            title: "Title 3",
            rate: "Rate 3",
            power: "Power 3",
            size: "Size 3"
        },
        {
            id: "4",
            image: deposit,
            title: "Title 1",
            rate: "Rate 1",
            power: "Power 1",
            size: "Size 1"
        },
        {
            id: "5",
            image: deposit,
            title: "Title 2",
            rate: "Rate 2",
            power: "Power 2",
            size: "Size 2"
        },
        {
            id: "6",
            image: deposit,
            title: "Title 3",
            rate: "Rate 3",
            power: "Power 3",
            size: "Size 3"
        },
        {
            id: "7",
            image: deposit,
            title: "Title 2",
            rate: "Rate 2",
            power: "Power 2",
            size: "Size 2"
        },
        {
            id: "8",
            image: deposit,
            title: "Title 3",
            rate: "Rate 3",
            power: "Power 3",
            size: "Size 3"
        }
    ];

    return (
        <div className="chainsaw-template">
            {chainsawData.map(data => (
                <Chainsaw key={data.id} {...data} />
            ))}
        </div>
    );
};

export default CatalogMenu;