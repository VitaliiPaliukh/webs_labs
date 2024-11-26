import {configureStore} from '@reduxjs/toolkit';
import chainsawReducer from "./chainsawSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer: {
        chainsawReducer,
        cartReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

});

export default store;