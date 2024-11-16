// src/components/features/CatalogMenu/CatalogMenu.jsx
import React, {useContext, useState } from 'react';
import Chainsaw from '../../entities/Chainsaw/Chainsaw';
import './CatalogMenu.css';
import {ChainsawContext} from "../../entities/Chainsaw/ChainsawContext";
import SearchInput from "../../common/SearchInput/SearchInput";


export const useChainsawDataById = (id) => {
    const chainsawData = useContext(ChainsawContext);
    return chainsawData.find(item => item.id === id);
};

const CatalogMenu = ({ filters, searchQuery }) => {
    const chainsawData = useContext(ChainsawContext);

    const filteredItems = chainsawData.filter(item => {
        const powerFilter = filters.power === "" ||
            (filters.power === "0-100" && item.power >= 0 && item.power <= 100) ||
            (filters.power === "100-200" && item.power > 100 && item.power <= 200) ||
            (filters.power === "200-300" && item.power > 200 && item.power <= 300) ||
            (filters.power === "300-400" && item.power > 300 && item.power <= 400) ||
            (filters.power === "400+" && item.power > 400);

        const searchFilter = item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase());

        return (
            powerFilter &&
            searchFilter &&
            (filters.rate === "" || item.rate === filters.rate) &&
            (filters.size === "" || item.size === filters.size)
        );
    });

    return (
        <div className="chainsaw-template">
            {filteredItems.map((data) => (
                <Chainsaw key={data.id} {...data} />
            ))}
        </div>
    );
};

export default CatalogMenu;