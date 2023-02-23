import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        isOpen: false,
        isDark: false
    },
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeMenu: (state) => {
            state.isOpen = false;
        },
        toggleTheme: (state) => {
            state.isDark = !state.isDark;
        },
    }
});

export const { toggleMenu, closeMenu, toggleTheme } = toggleSlice.actions;

export default toggleSlice.reducer;