import React, { useState } from 'react';
import CatalogFilters from "../../features/CatalogFilters/CatalogFilters";
import CatalogMenu from "../../features/CatalogMenu/CatalogMenu";

const CatalogPage = () => {
    const [filters, setFilters] = useState({
        power: "",
        rate: "",
        size: ""
    });

    const [searchQuery, setSearchQuery] = useState("");


    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    return (
        <div className="catalog_page">
            <CatalogFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onSearchChange={setSearchQuery}
            />
            <CatalogMenu filters={filters} searchQuery={searchQuery} />
        </div>
    );
};

export default CatalogPage;