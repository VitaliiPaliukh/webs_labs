import React from 'react';
import { ChainsawContext, chainsawContext } from '../Chainsaw/ChainsawContext';
// import chainsawData from './chainsawData';

const ChainsawProvider = ({ children }) => {
    return (
        <ChainsawContext.Provider value={chainsawContext}>
            {children}
        </ChainsawContext.Provider>
    );
};

export default ChainsawProvider;