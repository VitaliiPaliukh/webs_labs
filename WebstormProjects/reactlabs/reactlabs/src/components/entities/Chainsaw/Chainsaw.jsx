import React from 'react';
import './Chainsaw.css';
import ViewMoreInfo from "../../common/ViewMoreInfo/ViewMoreInfo";

const Chainsaw = ({ id, image, title, rate, power, size }) => {
    return (
        <div className="Items">
            <div className="chainsaw-item">
                <img src={"https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/chainsaws/photos/studio/h110-0522.webp?v=a537c1d2e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD"} alt="photo" id="item-image"/>
                <div className="text">
                    <h1 className="h2" id="title">{title}</h1>
                    <p className="h4" id="revolutions">{rate}</p>
                    <p className="h4" id="power">{power}</p>
                    <p className="h4" id="size">{size}</p>
                </div>
                <ViewMoreInfo id={id} />
            </div>
        </div>
    );
};

export default Chainsaw;