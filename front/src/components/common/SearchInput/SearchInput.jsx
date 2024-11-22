import React from 'react';
import './SearchInput.css';

const SearchInput = ({ value, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Search"
            className="search_input"
            value={value}
            onChange={onChange}
        />
    );
};

export default SearchInput;