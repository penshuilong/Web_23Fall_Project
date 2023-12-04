import axios from 'axios';

export const MEAL_API = "https://www.themealdb.com/api/json/v1/1";
export const API_KEY = process.env.REACT_APP_MEAL_API_KEY;

export const findMeal = async (searchTerm) => {
    const response = await axios.get(`${MEAL_API}/search.php?s=${searchTerm}&apiKey=${API_KEY}`);
    return response;
}
