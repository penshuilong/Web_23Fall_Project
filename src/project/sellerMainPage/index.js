
import React from 'react'
import { useState } from 'react';
function SellerMainPage() {

    // Initialize state variables
    const [totalTurnover, setTotalTurnover] = useState(1341);
    const [productSold, setProductSold] = useState(63);

    // You can create functions to update these values as needed
    // For example, to handle a new sale:
    const handleNewSale = (saleAmount) => {
        setTotalTurnover(prevTurnover => prevTurnover + saleAmount);
        setProductSold(prevSold => prevSold + 1);
    };

    // Example product data array
    const products = [
        {
            id: 1,
            imagePath: 'path_to_your_image.jpg',
            title: 'Product 1',
            category: 'Category Name',
            price: '26 $',
            ingredients: 'List of ingredients',
            instructions: 'Product usage instructions',
            description: 'Full product description here...'

        },
        {
            id: 2,
            imagePath: 'path_to_image_2.jpg',
            title: 'Product 2',
            price: '30 $',
            ingredients: 'List of ingredients',
            instructions: 'Product usage instructions',
            description: 'Full product description here...'
        },
        // ... More product objects
        {
            id: 3,
            imagePath: 'path_to_image_3.jpg',
            title: 'Product 3',
            price: '20 $',
            ingredients: 'List of ingredients',
            instructions: 'Product usage instructions',
            description: 'Full product description here...'
        },
        {
            id: 4,
            imagePath: 'path_to_image_4.jpg',
            title: 'Product 4',
            price: '15 $',
            ingredients: 'List of ingredients',
            instructions: 'Product usage instructions',
            description: 'Full product description here...'
        },
        {
            id: 5,
            imagePath: 'path_to_image_4.jpg',
            title: 'Product 5',
            price: '15 $',
            ingredients: 'List of ingredients',
            instructions: 'Product usage instructions',
            description: 'Full product description here...'
        },
        // Assume more products are added here
    ];


    // Split array into groups of four for creating rows
    const groupedProducts = products.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 4);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);

    return (
        <>
            <div style={{ display: 'flex', backgroundColor: 'gray', color: 'white', justifyContent: 'space-around', padding: '20px' }}>
                <div>
                    <h2>{totalTurnover} $</h2>
                    <p>Total Turnover</p>
                </div>
                <div>
                    <h2>{productSold}</h2>
                    <p>Product Sold</p>
                </div>
            </div>

            <div className="container">
                {groupedProducts.map((productGroup, index) => (
                    <div className="row" key={index}>
                        {productGroup.map((product, index) => (
                            <div className="col-md-3 col-sm-6 mb-4" key={index}>
                                <div className="card h-100">
                                    <img src={product.imagePath} className="card-img-top" alt="Product" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Category: {product.category}</h6>
                                        <p className="card-text">Price: {product.price}</p>
                                        <p className="card-text">Ingredients: {product.ingredients}</p>
                                        <p className="card-text">Instructions: {product.instructions}</p>
                                        <p className="card-text">{product.description}</p>
                                        {/* Other product details */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );

}

export default SellerMainPage;