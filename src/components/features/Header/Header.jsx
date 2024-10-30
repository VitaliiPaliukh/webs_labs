import React from 'react';
import './Header.css';
import photo from '../../assets/logo.svg'

const Header = () => {
    return (
        <section className="header" id="header">
            <div className="hamburger" id="hamburger">
                <div id="line1"></div>
                <div id="line2"></div>
                <div id="line3"></div>
            </div>
            <nav className="header__nav" id="nav">
                <a href="">Home</a>
                <a href="">Find a chainsaw</a>
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