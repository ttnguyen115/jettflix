import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tmdb from '../../apis/tmdb.jsx';

export const fetchMovieApi = createAsyncThunk(
    '/movie/fetchMovie',
    async (url) => {
        const res = await tmdb.get(url);
        return res.data.results;
    }
)

export const fetchGenreRequest = createAsyncThunk(
    '/movie/fetchGenre',
    async (genreId) => {
        const res = await tmdb.get('/discover/movie',{
            params: {
                with_genres: genreId.toString(),
            }
        });

        // console.log(res);
        return res.data.results;
    }
)

export const fetchSearchRequest = createAsyncThunk(
    '/movie/fetchSearch',
    async (keyword) => {
        const res = await tmdb.get('/search/movie', {
            params: {
                query: keyword,
            }
        });

        // console.log(res);
        return res.data.results;
    }
)

const movieSlice = createSlice({
    name: 'movie',

    initialState: {
        movies: [], 
        page: 1,
        loading: false,
    },

    reducers: {},

    extraReducers: {
        //  Filter by sidebar
        [fetchMovieApi.pending]: (state, action) => {
            state.loading = true;
        },

        [fetchMovieApi.fulfilled]: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        },

        //  Filter by genre
        [fetchGenreRequest.pending]: (state) => {
            state.loading = true;
        },

        [fetchGenreRequest.fulfilled]: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        },

        // Filter by search
        [fetchSearchRequest.pending]: (state) => {
            state.loading = true;
        },

        [fetchSearchRequest.fulfilled]: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        }
    }
});

const movieReducer = movieSlice.reducer;

// export const {} = movieSlice.actions;

export const selectMovies = state => state.movieReducer;

export default movieReducer;