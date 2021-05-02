import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from '../redux/sidebarReducer/sidebarSlice';

const store = configureStore({
    reducer: {
        sidebarReducer,
    }
});

export default store;