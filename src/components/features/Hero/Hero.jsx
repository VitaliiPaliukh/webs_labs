import React from 'react';
import './Hero.css'; // Переконайтеся, що шлях до CSS файлу правильний
import hero_img from '../../assets/chainsawHero.webp';


const Hero = () => {
    return (
        <div className="hero">
            <div className="top_hero">
                <img src={hero_img} alt="hero" className="hero_img"/>
                <div className="hero_text">
                    <h>Chainsaws</h>
                    <p>A chainsaw is a powerful tool with a rotating chain of sharp teeth, widely used for cutting wood in
                        forestry, tree felling, and emergency work. Available in gas, electric, and battery-powered models,
                        it requires careful handling.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;