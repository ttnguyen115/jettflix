import { createSlice } from "@reduxjs/toolkit";
import { TMDB_URL } from "../../constants/tmdbUrl";

const urlSlice = createSlice({
    name: 'url',

    initialState: {
        tmdbUrl: TMDB_URL[0]
    },

    reducers: {
        isChanged(state, action) {
            state.tmdbUrl = action.payload;
        }
    }
});

const urlReducer = urlSlice.reducer;

export const urlSelector = state => state.urlReducer.tmdbUrl;

export const { isChanged } = urlSlice.actions;

export default urlReducer;