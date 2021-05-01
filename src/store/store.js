import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './reducers/sidebarSlice';

const store = configureStore({
    reducer: {
        sidebarReducer,
    }
});

export default store;