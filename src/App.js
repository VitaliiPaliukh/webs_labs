import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import CatalogPage from './components/pages/CatalogPage/CatalogPage';
import Layout from './components/Layouts/Layout';
import ItemPage from './components/pages/ItemPage/ItemPage';
import { useLocation } from 'react-router-dom';
import ChainsawProvider from './components/entities/Chainsaw/ChainsawProvider';

const ItemPageWrapper = () => {
    const location = useLocation();
    const data = location.state;
    return <ItemPage {...data} />;



};

function App() {
    return (
        <ChainsawProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="catalog" element={<CatalogPage />} />
                        <Route path="itempage/:id" element={<ItemPageWrapper />} />
                    </Route>
                </Routes>
            </Router>
        </ChainsawProvider>
    );
}

export default App;