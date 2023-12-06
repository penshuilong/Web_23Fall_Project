import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../ProductDetail/cartReducer';

const store = configureStore({
    reducer: {
        cartReducer,
    },
});

export default store;