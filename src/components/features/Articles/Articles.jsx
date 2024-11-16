import React, {useContext, useState} from 'react';
import Article from "../../entities/Article/Article";
import deposit from "../../assets/depositphotos.jpg";
import './Articles.css';
import ViewAll from "../../common/ViewAll/ViewAll";
import {ChainsawContext} from "../../entities/Chainsaw/ChainsawContext";

const useChainsawData = () => {
    return useContext(ChainsawContext);
};

// const articlesData = [
//     {
//         picture: deposit,
//         title: "CRAFTSMAN Electric Chainsaw, 16-Inch, 12-Amp",
//         description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
//     },
//     {
//         picture: deposit,
//         title: "CRAFTSMAN Electric Chainsaw, 16-Inch, 12-Amp",
//         description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
//     },
//     {
//         picture: deposit,
//         title: "CRAFTSMAN Electric Chainsaw, 16-Inch, 12-Amp",
//         description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
//     }
// ];

const Articles = () => {
    const chainsawData = useChainsawData();
    const [visibleChainsaws, setVisibleChainsaws] = useState(4);

    const handleViewAll = () => {
        setVisibleChainsaws(prevVisibleChainsaws => prevVisibleChainsaws + 4);
    };

    return (
        <div>
            <section className="last-articles">
                <h2 className="h2"> Check out our latest chainsaw </h2>
                <div className="articles">
                    {chainsawData.slice(0, visibleChainsaws).map((article, index) => (
                        <Article
                            key={index}
                            picture={article.image}
                            title={article.title}
                            description={article.description}
                        />
                    ))}
                </div>
                {visibleChainsaws < chainsawData.length && (
                    <ViewAll onClick={handleViewAll} />
                )}
            </section>
        </div>
    );
};

export default Articles;