import React, { useState, useEffect } from 'react';
import * as client from "../user/client"
import CurrentUser from "../user/currentUser"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../imags/1.jpg';
import img2 from '../imags/2.jpg';
import img3 from '../imags/3.jpg';
import img4 from '../imags/4.jpg';

function HomePage() {
  // We will need to replace this placeholder with an actual image URL later.
  const backgroundImage = require("../imags/restaurantdefault.jpg"); // Replace with actual image path
  const [loggedinUser, setLoggedInUser] = useState(null);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      const user = await client.account();
      setLoggedInUser(user);
    };

    fetchLoggedInUser();
  }, []);

  const navigate = useNavigate();

  const viewStore = (username) => {
    navigate(`/project/sellermainpage/${username}`);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/users');
        const users = response.data;
        const sellers = users.filter(user => user.role === "SELLER");
        setSellers(sellers);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  {/* 图片路径数组 */ }
  const images = [img1, img2, img3, img4];

  return (
    <CurrentUser>
      <main className="center">

        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:3000/#/project">Food Store</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className="navbar-nav w-100">
                <a className="nav-link text-white flex-fill text-center" href="#shop1">Chinese Food</a>
                <a className="nav-link text-white flex-fill text-center" href="#shop2">Italian Food</a>
                <a className="nav-link text-white flex-fill text-center" href="#shop3">Hispanic Food</a>
                <a className="nav-link text-white flex-fill text-center" href="#shop4">Soul Food</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Welcome Message */}
        {loggedinUser && (
          <div className="alert alert-white text-start" role="alert" style={{ fontSize: '1.25rem' }}>
            Welcome back, <strong>{loggedinUser.username}!</strong>
          </div>
        )}

        {/* Shop Introduction */}
        <div className="jumbotron text-center bg-image" style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '50vh',
          marginLeft: '-15px',
          marginRight: '-15px',
          color: 'white', // This sets the text color to white
          fontWeight: 'bold'
        }}>
          <h1 className="display-4" style={{ fontSize: '80px', fontWeight: 'bold' }}>Welcome to Zbuyer</h1>
          <p className="lead" style={{ fontSize: '26px', }}>Discover amazing foods from around the world!</p>
        </div>


        {/* Restaurants Section */}
        <div >
          <h2 className="mb-4 text-center" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            fontSize: '50px',
          }}>Restaurants :</h2>
        </div>
        {/* Restaurants Section */}

        <div className="section-heading-2 text-center">
          {sellers.map((seller, index) => (
            <div key={seller._id} className="row justify-content-center mb-3">
              <div className="col-12 col-md-6 col-lg-8">
                <div className="card mb-3 " style={{ width: '30%', height: '200px', justifyContent: 'center' }}>
                  <div className="row g-0">
                    <div className="col-md-4" style={{ height: '200px' }}>

                      <img
                        src={images[index % images.length]}
                        className="img-fluid"
                        alt={seller.restaurantName || "Restaurant"}
                        style={{
                          width: '200px',  // 宽度自动
                          height: '100%', // 高度适应容器
                          objectFit: 'cover'  // 保持图片比例
                        }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{seller.restaurantName || "Restaurant"}</h5>
                        <button className="btn btn-primary" onClick={() => viewStore(seller.username)}>View Store</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>










      </main>
    </CurrentUser>
  );
}

export default HomePage;
