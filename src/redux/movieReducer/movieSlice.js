import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tmdb from '../../apis/tmdb.jsx';

export const fetchMovieApi = createAsyncThunk(
    '/movie/fetchMovie',
    async (url) => {
        const res = await tmdb.get(url);
        return res.data.results;
    }
)

const movieSlice = createSlice({
    name: 'movie',

    initialState: {
        movies: [], 
        loading: false,
    },

    reducers: {},

    extraReducers: {
        [fetchMovieApi.pending]: (state, action) => {
            state.loading = true;
        },

        [fetchMovieApi.fulfilled]: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        }
    }
});

const movieReducer = movieSlice.reducer;

// export const {} = movieSlice.actions;

export const selectMovies = state => state.movieReducer;

export default movieReducer;