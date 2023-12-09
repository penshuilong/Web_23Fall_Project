import userReducer from "./user/reducer";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './ProductDetail/cartReducer';

const store = configureStore({
  reducer: {
    userReducer,
    cartReducer,
  },
});
 
export default store;