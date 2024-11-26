import React from 'react';
import CatalogFilters from "../../features/CatalogFilters/CatalogFilters";
import CatalogMenu from "../../features/CatalogMenu/CatalogMenu";

const CatalogPage = () => {
    return (
        <div className="catalog_page">
            <CatalogFilters />
            <CatalogMenu />
        </div>
    );
};

export default CatalogPage;