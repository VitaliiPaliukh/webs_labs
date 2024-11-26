// src/components/features/CatalogMenu/CatalogMenu.jsx
import React, {useEffect} from 'react';
import Chainsaw from '../../entities/Chainsaw/Chainsaw';
import './CatalogMenu.css';
import Loader from "../Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {getChainsaws} from "../../../store/chainsawSlice";

const CatalogMenu = () => {
    const { chainsaws, filtersOption, status } = useSelector((state) => state.chainsawReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getChainsaws(filtersOption));
    }, [dispatch, filtersOption]);
    return (
        <>
            {status === "loading" && <Loader />}
            {status === "success" &&
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