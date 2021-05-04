import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from '../redux/sidebarReducer/sidebarSlice';
import urlReducer from '../redux/urlReducer/urlSlice';
import movieReducer from '../redux/movieReducer/movieSlice';

const store = configureStore({
    reducer: {
        sidebarReducer,
        urlReducer,
        movieReducer
    }
});

export default store;