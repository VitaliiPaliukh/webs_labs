import React from 'react';
import './ApplyButton.css';

const ApplyButton = ({ onClick }) => {
    return (
        <button className="apply_button" onClick={onClick}>Apply</button>
    );
};

export default ApplyButton;