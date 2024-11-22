import React from 'react';
import './Home.css';
import Hero from '../../features/Hero/Hero';
import Articles from '../../features/Articles/Articles';

const Home = () => {
    return (
        <>
            <Hero />
            <Articles />
        </>
    );
};

export default Home;