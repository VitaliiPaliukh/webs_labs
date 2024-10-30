import React from 'react';
import Article from "../../entities/Article/Article";
import deposit from "../../assets/depositphotos.jpg";
import './Articles.css';

const articlesData = [
    {
        picture: deposit,
        title: "CRAFTSMAN Electric Chainsaw, 16-Inch, 12-Amp",
        description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
    },
    {
        picture: deposit,
        title: "CRAFTSMAN Electric Chainsaw, 16-Inch, 12-Amp",
        description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
    },
    {
        picture: deposit,
        title: "CRAFTSMAN Electric Chainsaw, 16-Inch, 12-Amp",
        description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
    }
];

const Articles = () => {
    return (
        <div>
            <section className="last-articles">
                <h2 className="h2"> Check out our latest chainsaw </h2>
                <div className="articles">
                    {articlesData.map((article, index) => (
                        <Article
                            key={index}
                            picture={article.picture}
                            title={article.title}
                            description={article.description}
                        />
                    ))}
                </div>
                <a className="view" href="">View all </a>
            </section>
        </div>
    );
};

export default Articles;