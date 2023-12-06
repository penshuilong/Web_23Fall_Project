import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../ProductDetail/cartReducer';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        userReducer,
        userReducer,
    },
});

export default store;