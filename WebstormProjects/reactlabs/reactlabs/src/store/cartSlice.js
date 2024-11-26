import CartServices from "../services/CartServices";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getCart = createAsyncThunk(
    "cart/getCart",
    async () => {
        const response = await CartServices.getCart();
        return response.data;
    }
);

const initialState = { cart: [], status: "pending", error: null };
export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCart.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.status = "success";
                state.cart = action.payload.data;
            })
            .addCase(getCart.rejected, (state, action) => {
                state.cart = [];
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});


const cartReducer = cartSlice.reducer
export const {} = cartSlice.actions

export {initialState as cartInitialState};

export default cartReducer;