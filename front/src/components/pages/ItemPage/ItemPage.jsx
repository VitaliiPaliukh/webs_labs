// src/components/pages/ItemPage/ItemPage.jsx
import React from 'react';
import { getChainsawDataById } from '../../features/CatalogMenu/CatalogMenu';
import ItemDescription from '../../entities/ItemDescription/ItemDescription';
import { useParams } from 'react-router-dom';


const ItemPage = () => {
    const { id } = useParams();


    return (
        <div>
            <ItemDescription id={id} />
        </div>
    );
};

export default ItemPage;