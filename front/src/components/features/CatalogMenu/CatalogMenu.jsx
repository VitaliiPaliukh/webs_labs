// src/components/features/CatalogMenu/CatalogMenu.jsx
import React, {useContext, useState } from 'react';
import Chainsaw from '../../entities/Chainsaw/Chainsaw';
import './CatalogMenu.css';
import {ChainsawContext} from "../../entities/Chainsaw/ChainsawContext";
import SearchInput from "../../common/SearchInput/SearchInput";
import Loader from "../Loader/Loader";

const CatalogMenu = ({chainsaws, loading}) => {
    console.log(chainsaws)
    return (
        <>
            {loading && <Loader />}
            {!loading &&
                <div className="chainsaw-template">
                    {chainsaws.map(chainsaw => (
                        <Chainsaw key={chainsaw.id} {...chainsaw} />
                    ))}
                </div>
            }
        </>

    );
};

export default CatalogMenu;