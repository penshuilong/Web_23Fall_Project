import React, { useState } from 'react';
import './index.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import * as client from '../client';
import { useSelector, useDispatch } from 'react-redux';
import store from '../store';
import { addToCart } from './cartReducer';
import * as likesClient from "../likes/client";
import * as userClient from "../user/client";
import * as commentClient from "../comments/client";
import { Link } from 'react-router-dom';
import * as cartClient from "./client";
import { current } from '@reduxjs/toolkit';


function ProductDetail() {
    //new stuff, delete if there are bugs
    const [currentUser, setCurrentUser] = useState(null);
    const [likes, setLikes] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [showSignInAlert, setShowSignInAlert] = useState(false);
    const fetchUser = async () => {
        try {
            const user = await userClient.account();
            setCurrentUser(user);
            console.log("Fetched user:", user);
        } catch (error) {
            setCurrentUser(null);
        }
    };

    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [addedToCart, setAddedToCart] = useState(false);

    const dispatch = useDispatch();

    const handleAddToCart = async () => {
        if (!currentUser || !currentUser._id) {
            console.error("Current user or user ID is undefined.");
            setShowSignInAlert(true);
            return;
        }

        const item = {
            id: meal.idMeal,
            name: meal.strMeal,
            quantity: quantity,
            price: price,
            picture: meal.strMealThumb,
        };
        try {
            console.log("Current User ID:", currentUser?._id);
            console.log("Item:", item);
            console.log("Price:", price);
            const newCart = await cartClient.createCart(currentUser._id, [item], price * quantity); // Assuming you have userId and total available
            console.log("New cart:", newCart);
            // dispatch(addToCart(item));
            setAddedToCart(true);
        } catch (error) {
            console.error('Error adding to cart:', error);
            // Handle the error as needed
        }
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
    const strMeal = meal ? meal.strMeal : '';
    const strMealThumb = meal ? meal.strMealThumb : '';

    const fetchMeal = async () => {
        const results = await client.getMealById(mealId);
        setMeal(results[0]);
    }
    //new stuff, delete if there are bugs
    const fetchLikes = async () => {
        const likes = await likesClient.findUsersThatLikeMeal(mealId);
        setLikes(likes);
    };
    const currenUserLikesMeal = async () => {
        if (!currentUser || !currentUser._id) {
            console.error("Current user or user ID is undefined.");
            return;
        }

        const newLike = await likesClient.createUserLikesMeal(
            currentUser._id,
            mealId,
            strMeal,
            strMealThumb,
        );

        const updatedLike = { ...newLike, user: currentUser };

        setLikes([updatedLike, ...likes]);
    };

    const userHasLiked = likes.some(like => like.user._id === currentUser?._id);

    const currentUserUnlikesMeal = async () => {
        if (!currentUser || !currentUser._id) {
            console.error("Current user or user ID is undefined.");
            return;
        }
        await likesClient.deleteUserLikesMeal(currentUser._id, mealId);

        setLikes(likes.filter(like => like.user._id !== currentUser._id));
    };

    // const createCart = async (userId, items, total) => {
    //     const response = await cartClient.createCart(userId, items, total);
    //     return response.data;
    // }


    //comment
    const [userComments, setUserComments] = useState([]); 
    const [commentText, setCommentText] = useState(""); 
    const submitComment = async () => {
        if (!commentText) {
          alert("No empty comments");
          return;
        }
        try {
          const newComment = await commentClient.createComment(currentUser._id, mealId, strMeal, commentText);
          setUserComments([...userComments, newComment]);
          setCommentText("");
        } catch (error) {
          console.error("There's something wrong...", error);
        }
      };
      const fetchComments = async () => {
        try {
          const comments = await commentClient.findUsersThatCommentedMeal(mealId);
          setUserComments(comments);
        } catch (error) {
          console.error("Error fetching comments:", error);
        }
      };
      

    useEffect(() => {
        fetchMeal();
        fetchUser();
        fetchLikes();
        fetchComments();
        const minPrice = 5.99; 
        const maxPrice = 35.99; 
        const randomPrice = (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2);
        setPrice(randomPrice);
        fetchLikes().then(() => {
            console.log(likes);
        });

        setAddedToCart(false);
    }
        , [mealId]);

    return (
        <div>
            <h1 className='mb-2 ms-5'>Product Detail</h1>
            {addedToCart && <div className="alert alert-success">Added to cart successfully!</div>}
            {meal && (

//                 <div className="row">
//                     <div className="col-md-3 col-sm-6">
//                         <img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid" />
//                     </div>

//                     <div className="col-md-3 col-sm-6">
//                         <h2>{meal.strMeal}</h2>
//                         {/* <p>Restaurant Name</p> */}
//                         <div className="d-flex align-items-center"> {/* Use Bootstrap's utility class for flex alignment */}
//                             <p className="me-2">Quantity:</p>
//                             <button onClick={decreaseQuantity} className="btn btn-outline-secondary btn-circle" style={{ textAlign: "center", fontSize: "12px" }}>-</button>
//                             <span className="mx-2">{quantity}</span>
//                             <button onClick={increaseQuantity} className="btn btn-outline-secondary btn-circle" style={{ textAlign: "center", fontSize: "12px" }} >+</button>
//                         </div>
//                         <p>Price: ${price}</p>
//                         {currentUser && currentUser.role === "USER" && (
//                         <button onClick={handleAddToCart} className="btn btn-primary" style={{ width: "150px" }}>Add to Cart</button>
//                         )}

//                         {showSignInAlert && (
//                             <div className="alert alert-danger" role="alert">
//                                 You must sign in to add to cart.
//                             </div>
//                         )}
                        

            <>
            <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-6 mb-2 ms-5">
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid" />
                </div>

                <div className="col-lg-2 col-md-6 col-sm-6 mb-2 ms-5">
                    <h2>{meal.strMeal}</h2>
                    {/* <p>Restaurant Name</p> */}
                    <div className="d-flex align-items-center"> 
                        <p className="me-2">Quantity:</p>
                        <button onClick={decreaseQuantity} className="btn btn-outline-secondary btn-circle" style={{ textAlign: "center", fontSize: "12px" }}>-</button>
                        <span className="mx-2">{quantity}</span>
                        <button onClick={increaseQuantity} className="btn btn-outline-secondary btn-circle" style={{ textAlign: "center", fontSize: "12px" }} >+</button>
                    </div>
                        <p>Price: ${price}</p>
                        {currentUser && currentUser.role === "USER" && (
                        <button onClick={handleAddToCart} className="btn btn-primary" style={{ width: "150px" }}>Add to Cart</button>
                        )}

                        {showSignInAlert && (
                            <div className="alert alert-danger" role="alert">
                                You must sign in to add to cart.
                            </div>
                        )}
                </div>

                {/* Right column for ingredients */}
                <div className="col-lg-2 col-md-6 col-sm-6 mb-2 ms-5">
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
                    </ul>
                </div>
                
                <div className="col-lg-2 col-md-6 col-sm-6 mb-2 ms-5">
                {currentUser && (userHasLiked ? 
                <button onClick={currentUserUnlikesMeal} className="btn btn-danger float-end">
                    Unlike
                    </button> :
                    <button onClick={currenUserLikesMeal} className="btn btn-warning float-end">
                        Like
                        </button>
                    )}

                <h5>Likes</h5>
                <ul className="list-group">
                    {likes.map((like, index) => (
                        <li key={index} className="list-group-item">
                            {like.user && (
                                <>
                                {like.user.firstName} {like.user.lastName}
                                <Link to={`/project/profile/${like.user._id}`}>
                                    <br/>
                                    @{like.user.username}
                                </Link>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
                </div>

                <div className="row"> 
                <div className="col-12 mb-2 ms-3">
            <textarea
              rows="4"
              cols="50"
              className='mb-3 ms-5'
              placeholder="Comment here please"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <br/>
            <button className='btn btn-warning mb-3 ms-5' onClick={submitComment}>Submit</button>

            <div className='mb-3 ms-5'>
              <h4>Comments</h4>
              <ul>
                {userComments.map((comment, index) => (
                  <li key={index}>
                    <strong>{comment.user.username}:</strong> {comment.strComments}
                  </li>
                ))}
              </ul>
            </div>
                </div>
                </div>
            </div>
            </>
        )}
      </div>
    );}


export default ProductDetail;

