import React, { useState } from 'react';
import './index.css';

function ProductDetail() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <h1>Product Detail</h1>
            <div className="row">
                {/* Left column for meal picture */}
                <div className="col-md-4">
                    <img src="meal-picture.jpg" alt="Meal" className="img-fluid" />
                </div>
                {/* Middle column for meal details */}
                <div className="col-md-4">
                    <h2>Meal Name</h2>
                    <p>Restaurant Name</p>
                    <div className="d-flex align-items-center"> {/* Use Bootstrap's utility class for flex alignment */}
                        <p className="me-2">Quantity:</p>
                        <button onClick={decreaseQuantity} className="btn btn-outline-secondary btn-circle" style={{ textAlign: "center", fontSize: "12px" }}>-</button>
                        <span className="mx-2">{quantity}</span>
                        <button onClick={increaseQuantity} className="btn btn-outline-secondary btn-circle" style={{ textAlign: "center", fontSize: "12px" }} >+</button>
                    </div>
                    <p>Price: $10.99</p>
                    <button className="btn btn-primary" style={{ width: "150px" }}>Add to Cart</button>
                </div>
                {/* Right column for ingredients */}
                <div className="col-md-4">
                    <h3>Ingredients</h3>
                    <ul>
                        <li>Ingredient 1</li>
                        <li>Ingredient 2</li>
                        <li>Ingredient 3</li>
                        {/* Add more ingredients as needed */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
