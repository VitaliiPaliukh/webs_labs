// src/context/ChainsawContext.js
import React, { createContext } from 'react';
import deposit from "../../assets/depositphotos.jpg";


export const chainsawContext = [
    {
        id: "1",
        image: deposit,
        title: "PowerCut 100",
        rate: "4",
        power: 300,
        size: "M",
        description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
    },
    {
        id: "2",
        image: deposit,
        title: "TimberForce",
        rate: "1",
        power: 90,
        size: "L",
        description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
    },
    {
        id: "3",
        image: deposit,
        title: "EasySaw 250",
        rate: "3",
        power: 200,
        size: "S",
        description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
    },
    {
        id: "4",
        image: deposit,
        title: "MegaChop Pro",
        rate: "5",
        power: 480,
        size: "L",
        description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
    },
    {
        id: "5",
        image: deposit,
        title: "LightSaw 150",
        rate: "2",
        power: 150,
        size: "S",
        description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
    },
    {
        id: "6",
        image: deposit,
        title: "UltraCut X",
        rate: "4",
        power: 350,
        size: "M",
        description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
    },
    {
        id: "7",
        image: deposit,
        title: "ProSlash",
        rate: "3",
        power: 250,
        size: "M",
        description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
    },
    {
        id: "8",
        image: deposit,
        title: "CompactSaw",
        rate: "2",
        power: 120,
        size: "S",
        description: "A chainsaw is a powerful tool with a rotating chain, used for cutting wood, pruning trees, and various forestry tasks."
    }
];

export const ChainsawContext = createContext(chainsawContext);

// export const getChainsawDataById = (id) => {
//     console.log("Searching for id:", id);
//     const item = chainsawContext.find(item => item.id === id);
//     console.log("Found item:", item);
//     return item;
// };