// src/components/features/CatalogFilters/CatalogFilters.jsx
import React, {useState} from 'react';
import Filters from "../../entities/Filters/Filters";
import ApplyButton from "../../common/ApplyButton/ApplyButton";
import SearchInput from "../../common/SearchInput/SearchInput";
import './CatalogFilters.css';
import inputValue from "../../features/CatalogMenu/CatalogMenu";
import setInputValue from "../../features/CatalogMenu/CatalogMenu";
import Chainsaw from "../../entities/Chainsaw/Chainsaw";
import filteredItems from "../../features/CatalogMenu/CatalogMenu";
import applySearch from "../../features/CatalogMenu/CatalogMenu";
import {ChainsawContext} from "../../entities/Chainsaw/ChainsawContext";


const CatalogFilters = ({ filters, onFilterChange, onSearchChange }) => {
    const [inputValue, setInputValue] = useState("");

    const applySearch = () => {
        const trimmedQuery = inputValue.trim();
        onSearchChange(trimmedQuery);
    };

    return (
        <div className="filter">
            <Filters filters={filters} onFilterChange={onFilterChange} />
            <div className="filter_search">
                <SearchInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <ApplyButton onClick={applySearch} />
            </div>
        </div>
    );
};

export default CatalogFilters;