import React from 'react';
import './Article.css';


const Article = ({title, description, picture}) => {
    return (
        <div className="article">
            <img src={picture} alt="article"/>
            <h3 className="h3">{title}</h3>
            <h4 className="h4">{description}</h4>
        </div>
    );
};

export default Article;