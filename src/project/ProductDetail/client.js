import axios from "axios";

const API_BASE = "https://project-web23.onrender.com/api";
// const API_BASE = "http://localhost:4000/api";

const USERS_API = `${API_BASE}/users`;
const CART_API = `${API_BASE}/cart`;

export const createCart = async (userId, items, total) => {
    const response = await axios.post(`${CART_API}/${userId}`, { items, total });
    return response.data;
}

export const getCartByUserId = async (userId) => {
    const response = await axios.get(`${CART_API}/${userId}`);
    return response.data;
}

export const deleteCartItem = async (userId, itemId) => {
    const response = await axios.delete(`${CART_API}/${userId}/items/${itemId}`);
    return response.data;
}

export const deleteAllCart = async (userId) => {
    const response = await axios.delete(`${CART_API}/${userId}`);
    return response.data;
}
