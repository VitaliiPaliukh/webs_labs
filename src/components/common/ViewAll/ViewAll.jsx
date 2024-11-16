import React from 'react';
import './ViewAll.css';

const ViewAll = ({onClick}) => {
    return (
        <button className="View_all_button" onClick={onClick}>View All</button>
    );
};

export default ViewAll;

//className="View_all_button"