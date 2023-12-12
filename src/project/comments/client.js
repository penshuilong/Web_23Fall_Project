import axios from "axios";

const API_BASE = "https://project-web23.onrender.com"; //本地测试
//const API_BASE = "http://localhost:4000/api"

const USERS_API = `${API_BASE}/users`;
const COMMENTS_API = `${API_BASE}/comments`;

export const findAllComments = async () => { };


export const createComment = async (userId, idMeal, strMeal, strComments) => {
  try {
    const response = await axios.post(`${USERS_API}/${userId}/comments/${idMeal}`, {
      idMeal,
      strMeal,
      strComments,

    });

    return response.data;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};




export const deleteUserCommentsMeal = async (userId, idMeal) => {
  const response = await axios.delete(`${USERS_API}/${userId}/comments/${idMeal}`);
  return response.data;
};

export const findUsersThatCommentedMeal = async (idMeal) => {
  const response = await axios.get(`${COMMENTS_API}/${idMeal}/users`);
  return response.data;
};

export const findMealsThatUserCommented = async (userId) => {
  const response = await axios.get(`${USERS_API}/${userId}/comments`);
  return response.data;
};
