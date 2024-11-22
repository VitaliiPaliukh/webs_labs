import React, {useContext, useEffect, useState} from 'react';
import Article from "../../entities/Article/Article";
import deposit from "../../assets/depositphotos.jpg";
import './Articles.css';
import ViewAll from "../../common/ViewAll/ViewAll";
import ChainsawServices from "../../../services/ChainsawServices";
import Loader from "../Loader/Loader";

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
// ]
const Articles = () => {
    const [chainsawData, setChainsawData] = useState([]);
    const [count, setCount] = useState(1);
    const [viewMore, setViewMore] = useState(true);
    const [loading, setLoading] = useState(true);
    const getChainsaws = async () => {
        setLoading(true);
        const response = await ChainsawServices.getAllChainsaw({ pageSize: 4, pageAmount: count});
        setChainsawData([...chainsawData, ...response.data.data]);
        setTimeout(() => setLoading(false), 100);
        const next_response = await ChainsawServices.getAllChainsaw({ pageSize: 4, pageAmount: count+1});
        if (next_response.data.data.length === 0){
            setViewMore(false);
        }
    }
    useEffect(() => {
        getChainsaws().then();
        console.log(chainsawData)
    }, [count]);

    const handleViewAll = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <section className="last-articles">
                <h2 className="h2"> Check out our latest chainsaw </h2>
                <div className="articles">
                    {loading && <Loader/>}
                    {!loading && chainsawData && chainsawData.map((article, index) => (
                        <Article
                            key={index}
                            picture={"https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/chainsaws/photos/studio/h110-0522.webp?v=a537c1d2e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD"}
                            title={article.title}
                            description={article.description}
                        />
                    ))}
                </div>
                {viewMore && (
                    <ViewAll onClick={handleViewAll} />
                )}
            </section>
        </div>
    );
};

export default Articles;