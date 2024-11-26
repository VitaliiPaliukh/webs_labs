import React from 'react';
import Description from '../../entities/ItemDescription/ItemDescription';

const ItemDescription = ({ id, title, description, image }) => {
    const descriptionData = {
        id,
        title,
        description,
        image
    };

    return (
        <div className="ItemDescription">
            <Description key={descriptionData.id} {...descriptionData} />
        </div>
    );
};

export default ItemDescription;