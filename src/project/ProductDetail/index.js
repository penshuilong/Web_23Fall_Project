import React, { useState } from 'react';
import './index.css';
import { useNavigate, useParams } from 'react-router-dom';
import {useEffect} from 'react';
import * as client from '../client';
import {useSelector, useDispatch} from 'react-redux';
import store from '../store';
import { addToCart } from './cartReducer';


function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [addedToCart, setAddedToCart] = useState(false);

    const dispatch = useDispatch();
    const handleAddToCart = () => {
        const item = {
            id: meal.idMeal,
            name: meal.strMeal,
            quantity: quantity,
            price: price,
            picture: meal.strMealThumb,
        };
        dispatch(addToCart(item));
        setAddedToCart(true); 
    };


    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const [meal, setMeal] = useState(null);
    const { mealId } = useParams();

    const fetchMeal = async () => {
        const results = await client.getMealById(mealId);
        setMeal(results[0]);
    }

    useEffect(() => {
        fetchMeal();
        const minPrice = 5.99; 
        const maxPrice = 35.99; 
        const randomPrice = (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2);
        setPrice(randomPrice);
        setAddedToCart(false);
    }
    , [mealId]);

    return (
        <div>
            <h1>Product Detail</h1>
            {addedToCart && <div className="alert alert-success">Added to cart successfully!</div>}
            {meal && (
            <div className="row">
                <div className="col-md-4">
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h2>{meal.strMeal}</h2>
                    {/* <p>Restaurant Name</p> */}
                    <div className="d-flex align-items-center"> {/* Use Bootstrap's utility class for flex alignment */}
                        <p className="me-2">Quantity:</p>
                        <button onClick={decreaseQuantity} className="btn btn-outline-secondary btn-circle" style={{ textAlign: "center", fontSize: "12px" }}>-</button>
                        <span className="mx-2">{quantity}</span>
                        <button onClick={increaseQuantity} className="btn btn-outline-secondary btn-circle" style={{ textAlign: "center", fontSize: "12px" }} >+</button>
                    </div>
                    <p>Price: ${price}</p>
                    <button onClick={handleAddToCart} className="btn btn-primary" style={{ width: "150px" }}>Add to Cart</button>
                </div>
                {/* Right column for ingredients */}
                <div className="col-md-4">
                    <h3>Ingredients</h3>
                    <ul>
                        <li>{meal.strIngredient1}</li>
                        <li>{meal.strIngredient2}</li>
                        <li>{meal.strIngredient3}</li>
                        <li>{meal.strIngredient4}</li>
                        <li>{meal.strIngredient5}</li>
                        <li>{meal.strIngredient6}</li>
                        <li>{meal.strIngredient7}</li>
                        <li>{meal.strIngredient8}</li>
                        {/* Add more ingredients as needed */}
                    </ul>
                </div>
            </div>
            )}
        </div>
    );
}

export default ProductDetail;
