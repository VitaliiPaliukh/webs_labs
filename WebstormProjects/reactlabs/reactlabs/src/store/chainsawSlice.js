import ChainsawServices from "../services/ChainsawServices";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getChainsaws = createAsyncThunk(
    "chainsaw/getChainsaws",
    async (filtersOption, thunkAPI) => {
        return ChainsawServices.getAllChainsaw(filtersOption);
    }
);

const initialState = { chainsaws: [], filtersOption: {sort: "", search: "", power: 0, rate: "", size: ""}, status: "pending", error: null };
export const chainsawSlice = createSlice({
    name: "chainsaw",
    initialState: initialState,
    reducers: {
        setFilterOptions: (state, action) => {
            state.filtersOption = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getChainsaws.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getChainsaws.fulfilled, (state, action) => {
                state.status = "success";
                state.chainsaws = action.payload.data.data;
            })
            .addCase(getChainsaws.rejected, (state, action) => {
                state.chainsaws = [];
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

const chainsawReducer = chainsawSlice.reducer
export const { setFilterOptions } = chainsawSlice.actions

export {initialState as chainsawInitialState};

export default chainsawReducer;