// src/components/features/CatalogFilters/CatalogFilters.jsx
import React, {useState} from 'react';
import Filters from "../../entities/Filters/Filters";
import ApplyButton from "../../common/ApplyButton/ApplyButton";
import SearchInput from "../../common/SearchInput/SearchInput";
import './CatalogFilters.css';
import {useDispatch, useSelector} from "react-redux";
import {setFilterOptions} from "../../../store/chainsawSlice";



const CatalogFilters = () => {
    const [inputValue, setInputValue] = useState("");
    const { filtersOption } = useSelector((state) => state.chainsawReducer);
    const dispatch = useDispatch();

    const handleApplyFilters = () => {
        dispatch(setFilterOptions({ ...filtersOption, filter: inputValue }));
    };

    return (
        <div className="filter">
            <Filters/>
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