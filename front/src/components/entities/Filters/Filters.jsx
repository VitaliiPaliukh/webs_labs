// src/components/entities/Filters/Filters.jsx
import React from 'react';
import Select from "../../common/Select/Select";
// import SearchInput from "../../common/SearchInput/SearchInput";
import './Filters.css';

const Filters = ({filtersOption, setFiltersOption}) => {
    const handleFilterChange = (filterName, value) => {
        setFiltersOption(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    return (
        <form className={'filter_menu'}>
            <Select
                name={"power"}
                values={["power", "0", "100", "200", "300", "400"]}
                options={["power", "0+", "100+", "200+", "300+", "400+"]}
                onChange={e => handleFilterChange("power", e.target.value)}
                value={filtersOption.power}
            />
            <Select
                name={"rate"}
                values={["Rate", "1", "2", "3", "4", "5"]}
                options={["Rate", "1 Star", "2 Star", "3 Star", "4 Star", "5 Star"]}
                onChange={e => handleFilterChange("rate", e.target.value)}
                value={filtersOption.rate}
            />
            <Select
                name={"size"}
                values={["Size", "S", "M", "L"]}
                options={["Size", "Small", "Medium", "Large"]}
                onChange={e => handleFilterChange("size", e.target.value)}
                value={filtersOption.size}
            />
        </form>
    );
};

export default Filters;