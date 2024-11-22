// src/components/features/CatalogFilters/CatalogFilters.jsx
import React, {useState} from 'react';
import Filters from "../../entities/Filters/Filters";
import ApplyButton from "../../common/ApplyButton/ApplyButton";
import SearchInput from "../../common/SearchInput/SearchInput";
import './CatalogFilters.css';
import {FiltersOption} from "../../entities/Filters/FiltersOption";



const CatalogFilters = ({ filtersOption, setFiltersOption}) => {
    const [inputValue, setInputValue] = useState("");

    const handleApplyFilters = () => {
        setFiltersOption({ ...filtersOption, filter: inputValue });
    };

    return (
        <div className="filter">
            <Filters filtersOption={filtersOption} setFiltersOption={setFiltersOption} />
            <div className="filter_search">
                <SearchInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <ApplyButton onClick={handleApplyFilters} />
            </div>
        </div>
    );
};

export default CatalogFilters;