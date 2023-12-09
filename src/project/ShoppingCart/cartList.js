import React from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeFromCart } from '../ProductDetail/cartReducer';
import { useNavigate } from 'react-router-dom';

function CartList() {
    // const { cartItems } = useSelector(state => state.cartReducer);
    // console.log('cartItems:', cartItems);

        const { cartItems } = useSelector(state => {
            console.log("Full state:", state);
            return state.cartReducer;
        });
        console.log('cartItems:', cartItems);
    const dispatch = useDispatch();
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const navigate = useNavigate();

    const handleDelete = (itemId) => {
        // Dispatch the removeFromCart action with the item's ID
        dispatch(removeFromCart(itemId));
    };

    const handleCheckout = () => {
        // Assume you have a function to place the order (e.g., send it to the server)
        // If the order placement is successful, set isOrderPlaced to true.
        // For demonstration purposes, let's assume the order is always successful.
        setIsOrderPlaced(true);

        // You can also perform any additional logic here, such as clearing the cart.
    };

    const handleClosePopup = () => {
        setIsOrderPlaced(false);
        
        // Navigate back to the homepage after closing the pop-up
        navigate('/project');
    };


    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <div className='container'>
                <div className='row'>
                    <ul className="list-group">
                    {cartItems && cartItems.length === 0 && <p>No items in the cart</p>}

                        {cartItems && cartItems.map(item => (
                            <li key={item.id} className="list-group-item border-0">
                                <div className="card">
                                    <div className="row">
                                        {/* Left column for image */}
                                        <div className="col-md-3">
                                            {/* Add your image component or placeholder here */}
                                            <img src={item.picture}  className="img-fluid" />
                                        </div>
                                        {/* Middle column for item details */}
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">Quantity: {item.quantity}</p>
                                                <p className="card-text">Price: ${item.price}</p>
                                            </div>
                                        </div>
                                        {/* Right column for total price and delete button */}
                                        <div className="col-md-3">
                                            <div className="card-body">
                                                <p className="card-text">Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
                                                <button onClick={() => handleDelete(item.id)} className="btn btn-danger" style={{ width: "150px" }}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='row justify-content-end'>
                    <button className="btn btn-primary mt-3" style={{ width: "150px" }} onClick={handleCheckout}>Checkout</button>
                </div>
                {isOrderPlaced && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Successfully placed order!</p>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default CartList;