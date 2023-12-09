import axios from "axios";

const API_BASE = "http://localhost:4000/api";
// const API_BASE = "https://project-web23.onrender.com/api";

const USERS_API = `${API_BASE}/users`;
const LIKES_API = `${API_BASE}/likes`;

export const findAllLikes = async () => {};

export const createUserLikesMeal = async (userId, idMeal, strMeal, strMealThumb) => {
  const response = await axios.post(`${USERS_API}/${userId}/likes/${idMeal}`, { strMeal, strMealThumb });
  return response.data;
};

export const deleteUserLikesMeal = async (userId, idMeal) => {};
export const findUsersThatLikeMeal = async (idMeal) => {
  const response = await axios.get(`${LIKES_API}/${idMeal}/users`);
  return response.data;
};
export const findMealsThatUserLikes = async (userId) => {
  const response = await axios.get(`${USERS_API}/${userId}/likes`);
  return response.data;
};
