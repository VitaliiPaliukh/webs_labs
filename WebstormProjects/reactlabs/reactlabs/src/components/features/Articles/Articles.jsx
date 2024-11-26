import React, { useEffect, useState } from 'react';
import Article from "../../entities/Article/Article";
import './Articles.css';
import ViewAll from "../../common/ViewAll/ViewAll";
import Loader from "../Loader/Loader";
import { useDispatch} from "react-redux";
import { getChainsaws } from "../../../store/chainsawSlice";

const Articles = () => {
    const [count, setCount] = useState(1);
    const [chainsawData, setChainsawData] = useState([]);
    const [hasMoreData, setHasMoreData] = useState(true);
    const dispatch = useDispatch();

    const fetchChainsaws = async () => {
        const resultAction = await dispatch(getChainsaws({ pageSize: 3, pageAmount: count }));
        if (getChainsaws.fulfilled.match(resultAction)) {
            const newChainsaws = resultAction.payload.data.data;
            setChainsawData((prevData) => {
                const uniqueChainsaws = newChainsaws.filter(newChainsaw =>
                    !prevData.some(existingChainsaw => existingChainsaw.id === newChainsaw.id)
                );
                return [...prevData, ...uniqueChainsaws];
            });
            if (newChainsaws.length < 3) {
                setHasMoreData(false);
            }
        }
    };

    useEffect(() => {
        fetchChainsaws();
    }, [dispatch, count]);

    const handleViewAll = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <section className="last-articles">
                <h2 className="h2"> Check out our latest chainsaw </h2>
                <div className="articles">
                    {chainsawData.length === 0 && <Loader />}
                    {chainsawData.map((article, index) => (
                        <Article
                            key={index}
                            picture={"https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna/chainsaws/photos/studio/h110-0522.webp?v=a537c1d2e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD"}
                            title={article.title}
                            description={article.description}
                        />
                    ))}
                </div>
                {hasMoreData && (
                    <ViewAll onClick={handleViewAll} />
                )}
            </section>
        </div>
    );
};

export default Articles;