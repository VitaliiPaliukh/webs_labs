import React from 'react';
import './Header.css';
import photo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className="header" id="header">
            <div className="hamburger" id="hamburger">
                <div id="line1"></div>
                <div id="line2"></div>
                <div id="line3"></div>
            </div>
            <nav className="header__nav" id="nav">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <a href="">Apps</a>
                <a href="">Testimonials</a>
                <a href="">About us</a>
            </nav>
            <div className="header_title" id="logo">
                <img src={photo} alt="logo"/>
            </div>
        </section>
    );
};

export default Header;