import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/trafalgar_footer.svg';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer__background">
                    <div className="footer_logo">
                        <img src={footer_logo} alt="logo footer"/>
                        <nav className="footer_nav">
                            <a href="">Company</a>
                            <a href="">Region</a>
                            <a href="">Help</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;