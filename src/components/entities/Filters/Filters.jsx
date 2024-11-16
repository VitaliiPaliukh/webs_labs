// src/components/entities/Filters/Filters.jsx
import React from 'react';
import Select from "../../common/Select/Select";
// import SearchInput from "../../common/SearchInput/SearchInput";
import './Filters.css';

const Filters = ({ filters, onFilterChange, onSearchChange }) => {
    const handleFilterChange = (filterName, value) => {
        if (value === "Power" || value === "Rate" || value === "Size") {
            onFilterChange(filterName, "");
        } else {
            onFilterChange(filterName, value);
        }
    };

    return (
        <form className={'filter_menu'}>
            <Select
                name={"power"}
                values={["Power", "0", "100", "200", "300", "400"]}
                options={["Power", "0+", "100+", "200+", "300+", "400+"]}
                onChange={e => handleFilterChange("power", e.target.value)}
                value={filters.power}
            />
            <Select
                name={"rate"}
                values={["Rate", "1", "2", "3", "4", "5"]}
                options={["Rate", "1 Star", "2 Star", "3 Star", "4 Star", "5 Star"]}
                onChange={e => handleFilterChange("rate", e.target.value)}
                value={filters.rate}
            />
            <Select
                name={"size"}
                values={["Size", "S", "M", "L"]}
                options={["Size", "Small", "Medium", "Large"]}
                onChange={e => handleFilterChange("size", e.target.value)}
                value={filters.size}
            />
        </form>
    );
};

export default Filters;