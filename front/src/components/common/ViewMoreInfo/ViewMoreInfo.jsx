import React from 'react';
import '../ViewMoreInfo/ViewMoreInfo.css';
import { Link } from 'react-router-dom';

const ViewMoreInfo = ({ id }) => {
    return (
        <Link to={`/itempage/${id}`} className="View_more_button">View more</Link>
    );
};

export default ViewMoreInfo;