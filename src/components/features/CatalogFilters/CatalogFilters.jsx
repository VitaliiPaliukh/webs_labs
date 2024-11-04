import React from 'react';
import Filters from "../../entities/Filters/Filters";
import ApplyButton from "../../common/ApplyButton/ApplyButton";
import SearchInput from "../../common/SearchInput/SearchInput";
import './CatalogFilters.css';

const CatalogFilters = () => {
    return (
        <div className="filter">
            <Filters/>
            <div className="filter_search">
                <SearchInput/>
                <ApplyButton/>
            </div>
        </div>
    );
};

export default CatalogFilters;