import React from 'react';
import CatalogFilters from "../../features/CatalogFilters/CatalogFilters";
import CatalogMenu from "../../features/CatalogMenu/CatalogMenu";
const CatalogPage = () => {
    return (
        <>
            <CatalogFilters/>
            <CatalogMenu/>
        </>
    );
};

export default CatalogPage;