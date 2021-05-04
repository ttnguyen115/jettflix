import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from '../redux/sidebarReducer/sidebarSlice';
import movieReducer from '../redux/movieReducer/movieSlice';

const store = configureStore({
    reducer: {
        sidebarReducer,
        movieReducer
    }
});

export default store;