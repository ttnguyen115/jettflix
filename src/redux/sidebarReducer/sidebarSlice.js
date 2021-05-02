import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    
    initialState: {
        open: false,
    },

    reducers: {
        isOpen(state, action) {
            state.open = action.payload;
        }
    }
});

const sidebarReducer = sidebarSlice.reducer;

export const sidebarSelector = state => state.sidebarReducer.open;

export const { isOpen } = sidebarSlice.actions;

export default sidebarReducer;