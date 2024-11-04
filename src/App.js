import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import CatalogPage from './components/pages/CatalogPage/CatalogPage';
import Layout from './components/Layouts/Layout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="catalog" element={<CatalogPage />} />
                    {/* Add other routes here */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;