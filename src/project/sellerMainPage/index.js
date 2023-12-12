import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import * as userClient from "../user/client";

function SellerMainPage() {
    const { username } = useParams();
    const [meals, setMeals] = useState([]); // 用于存储API获取的菜品数据
    const [displayMeals, setDisplayMeals] = useState([]);// 用于存储展示的菜品
    const [currentUser, setCurrentUser] = useState(null);
    const [restaurantName, setRestaurantName] = useState('');

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const navigate = useNavigate();

    const goToProductDetail = (mealId) => {
        navigate(`/project/productdetail/${mealId}`);
    };

    const fetchUser = async () => {
        try {
            const user = await userClient.account();
            setCurrentUser(user);
        } catch (error) {
            setCurrentUser(null);
        }
    };

    // const isSeller = currentUser && currentUser.role === 'SELLER'; 增加一个判断用户名的条件
    const isSeller = currentUser && currentUser.role === 'SELLER' && currentUser.username === username;

    useEffect(() => {
        fetchUser();
    }, []);



    useEffect(() => {
        // Fetch seller-specific data
        const fetchSellerData = async () => {
            try {
                const response = await axios.get(`https://project-web23.onrender.com/api/sellermeals/${username}`);
                if (response.data && response.data.length > 0) {
                    const mealsData = response.data[0].sellerMeal;
                    const mealsDetails = await Promise.all(mealsData.map(async (mealId) => {
                        const mealDetailResponse = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
                        return mealDetailResponse.data.meals[0];
                    }));
                    setDisplayMeals(mealsDetails);
                }

            } catch (error) {
                console.error("Error fetching seller data", error);
            }
        };

        if (username) {
            fetchSellerData();
        }
    }, [username]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const searchMeals = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(response => {
                const meals = response.data.meals;
                if (meals) {
                    setSearchResults(meals);
                } else {
                    setSearchResults([]);
                }
            })
            .catch(error => {
                console.error("Error during search", error);
            });
    };

    // 增加菜品
    const addMeal = async () => {
        if (selectedMeal && !displayMeals.some(meal => meal.idMeal === selectedMeal.idMeal)) {
            try {
                await axios.post('https://project-web23.onrender.com/api/sellermeals', {
                    username, // 使用 username
                    sellerMeal: selectedMeal.idMeal
                });
                setDisplayMeals([...displayMeals, selectedMeal]);
                setSelectedMeal(null);
            } catch (error) {
                console.error("Error adding meal", error);
            }
        }
    };

    // 删除菜品
    const deleteMeal = async (mealId) => {
        try {
            await axios.delete(`https://project-web23.onrender.com/api/sellermeals/${username}/${mealId}`);
            setDisplayMeals(displayMeals.filter(meal => meal.idMeal !== mealId));
        } catch (error) {
            console.error("Error deleting meal", error);
        }
    };

    const clearSearch = () => {
        setSearchResults([]);
        setSelectedMeal(null); // 如果想清除选中的菜品
    };




    return (
        <>
            <div className="container mt-4">
                {isSeller && (
                    <div className="row mb-3">

                        <div className="col">
                            <input type="text" className="form-control" value={searchTerm} onChange={handleSearchChange} placeholder="Search meals..." />
                        </div>
                        <div className="col-auto">
                            <button onClick={searchMeals} className="btn btn-primary">Search</button>
                        </div>
                        <div className="col-auto">
                            <button onClick={addMeal} className="btn btn-success">Add</button>
                        </div>
                        <div className="col-auto">
                            <button onClick={clearSearch} className="btn btn-warning">Clear Search</button>
                        </div>
                    </div>
                )}


                <div className="row mb-4 justify-content-center">
                    <h2 className="text-center">{restaurantName}</h2>
                </div>

                <div className="row">
                    {searchResults.map((meal) => (
                        <div key={meal.idMeal} className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <div className={`card ${selectedMeal && selectedMeal.idMeal === meal.idMeal ? 'border-success' : ''}`} onClick={() => setSelectedMeal(meal)}>
                                <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                                <div className="card-body">
                                    <h6 className="card-title">{meal.strMeal}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-4">
                    <h4 className="col-12">Meals</h4>
                    {displayMeals.map((meal) => (
                        <div key={meal.idMeal} className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <div className="card h-100" onClick={() => goToProductDetail(meal.idMeal)}>
                                <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                                <div className="card-body">
                                    <h5 className="card-title">{meal.strMeal}</h5>
                                    <p className="card-text">Category{meal.strCategory}</p>
                                    <p className="card-text">Area{meal.strArea}</p>
                                    {isSeller && (
                                        <button onClick={(e) => {
                                            e.stopPropagation(); // 防止事件冒泡到卡片点击
                                            deleteMeal(meal.idMeal);
                                        }} className="btn btn-danger">Delete</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );

}

export default SellerMainPage;
