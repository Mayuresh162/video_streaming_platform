import { configureStore } from '@reduxjs/toolkit';
import toggleSlice from './toggleSlice';
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import tokenSlice from './tokenSlice';

const store = configureStore({
    reducer: {
        toggle: toggleSlice,
        search: searchSlice,
        chat: chatSlice,
        token: tokenSlice
    }
});

export default store;