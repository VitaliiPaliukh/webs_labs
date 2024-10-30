import logo from './logo.svg';
import './App.css';
import Header from "./components/features/Header/Header";
import Home from "./components/pages/Home/Home";
import Footer from "./components/features/Footer/Footer";
import Layout from "./components/Layouts/Layout";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
  );
}

export default App;
