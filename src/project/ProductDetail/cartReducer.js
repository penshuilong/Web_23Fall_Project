import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    };
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log('Reducer - addToCart action:', action);
            const item = action.payload;
            const existingItem = state.cartItems.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.cartItems.push(item);
            }
        }
        // removeFromCart: (state, action) => {
        //     const id = action.payload;
        //     state.cartItems = state.cartItems.filter((i) => i.id !== id);
        // },
        // updateQuantity: (state, action) => {
        //     const { id, quantity } = action.payload;
        //     const item = state.cartItems.find((i) => i.id === id);
        //     if (item) {
        //         item.quantity = quantity;
        //     }
        // },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;