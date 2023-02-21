import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        isOpen: false
    },
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeMenu: (state) => {
            state.isOpen = false;
        }
    }
});

export const { toggleMenu, closeMenu } = toggleSlice.actions;

export default toggleSlice.reducer;