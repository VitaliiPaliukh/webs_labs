import React, { useState } from 'react';
import Select from "../../common/Select/Select";
import './Filters.css';

const Filters = () => {
    const [filters, setFilters] = useState({
        power: "",
        rate: "",
        size: ""
    });

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    return (
        <form className={'filter_menu'}>
            <Select
                name={""}
                values={["Power", "0-100", "100-200", "200-300", "400+"]}
                options={["Power", "0-100", "100-200", "200-300", "400+"]}
                onChange={e => handleFilterChange("power", e.target.value)}
            />
            <Select
                name={""}
                values={["Rate", "1", "2", "3", "4", "5"]}
                options={["Rate", "1 Star", "2 Star", "3 Star", "4 Star", "5 Star"]}
                onChange={e => handleFilterChange("rate", e.target.value)}
            />
            <Select
                name={""}
                values={["Size", "S", "M", "L"]}
                options={["Size", "Small", "Medium", "Large"]}
                onChange={e => handleFilterChange("size", e.target.value)}
            />
        </form>
    );
};

export default Filters;