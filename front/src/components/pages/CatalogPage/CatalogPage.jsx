import React, {useEffect, useState} from 'react';
import CatalogFilters from "../../features/CatalogFilters/CatalogFilters";
import CatalogMenu from "../../features/CatalogMenu/CatalogMenu";
import ChainsawServices from "../../../services/ChainsawServices";
import FiltersOption from "../../entities/Filters/FiltersOption";

const CatalogPage = () => {
    const [chainsaws, setChainsaws] = useState([]);
    const [filtersOption, setFiltersOption] = useState(FiltersOption);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log(filtersOption)
        setLoading(true);
        const fetchChainsaws = async () => {
            const response = await ChainsawServices.getAllChainsaw(filtersOption);
            setChainsaws(response.data.data);
            setTimeout(() => setLoading(false), 100)
        };
        fetchChainsaws();
    }, [filtersOption]);


    return (
        <div className="catalog_page">
            <CatalogFilters
                filtersOption={filtersOption}
                setFiltersOption={setFiltersOption}
            />
            <CatalogMenu chainsaws={chainsaws} loading={loading} />
        </div>
    );
};

export default CatalogPage;