import React from 'react';
import { useSelector } from 'react-redux';


function CartList() {
    
    const { cartItems } = useSelector(state => state.cartReducer);
    console.log('cartItems:', cartItems);




    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <div className='container'>
                <div className='row'>
                    <ul className="list-group">
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
                                                <button className="btn btn-danger" style={{ width: "150px" }}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='row justify-content-end'>
                    <button className="btn btn-primary mt-3" style={{ width: "150px" }} >Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartList;