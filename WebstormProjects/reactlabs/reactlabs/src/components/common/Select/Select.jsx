import React from 'react';

const Select = ({ name, values, options, onChange }) => {
    return (
        <div className="select-container">
            <label>{name}</label>
            <select onChange={onChange}>
                {values.map((value, index) => (
                    <option key={value} value={value}>
                        {options[index]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;