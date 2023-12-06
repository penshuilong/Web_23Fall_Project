import './MainContent.css'; 
import React, { useState, useEffect } from 'react';
import * as client from "../user/client"

function HomePage() {
  const backgroundImage = "回头找一张好看的";
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await client.account(); 
      setCurrentUser(user);
    };

    fetchCurrentUser();
  }, []);

  return (
    <main className="main-content">

      <div className="row">
          <nav className="col-12 navigation">
            <a href="#shop1" className="p-2">Chinese Food</a>
            <a href="#shop2" className="p-2">Italian Food</a>
            <a href="#shop3" className="p-2">Hispanic Food</a>
            <a href="#shop4" className="p-2">Soul Food</a>

          </nav>
        </div>


       {/* Welcome Back Message(好丑啊 但是没想好怎么改) */}
       {currentUser && (
        <div className="row">
          <div className="col-12">
          <p className="welcome-back ms-3">Welcome back, {currentUser.username}!</p>
          </div>
        </div>
      )}

      {/* Shop Introduction */}
       <div className="shop-intro" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="shop-intro-content">
          <h2>Shop 1</h2>
          <p>随便写吧大概</p>
        </div>
      </div>
      
      {/* Recommended Section */}
      <div className="recommended-for-you py-3">
        <h3>Recommended for you</h3>

        <div className="row">
          {[1, 2, 3, 4].map(item => (
            <div key={item} className="col-md-3 mb-4">
              <div className="card">
             
                <img src={`#`} alt="Placeholder" className="card-img-top" />
          
                <div className="card-body">
                  {/* <h5 className="card-title">Heading 1</h5> */}
                  <p className="card-text">food2-shop2 简介</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     {/* Heading 2 Section */}
     <div className="section-heading-2 py-3">
        <h2 className="text-left mb-4">Heading 2</h2>
        <div className="item-container">
          {[1, 2, 3, 4].map(item => (
            <div key={item} className="item-wrapper mb-4">
              <div className="item rounded border p-2 d-flex align-items-center">
                <div className="image-placeholder me-3">
                  {/* Placeholder image */}
                  <img src={`#`} alt="Placeholder" className="rounded" />
                </div>
                <h5 className="flex-grow-1 me-3">Heading 1</h5>
                <button className="btn btn-primary">View Store</button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Load More*/}
      <div className="load-more py-3 text-center">
        <button className="btn btn-outline-secondary">Show More</button>
      </div>
    </main>
  );
}

export default HomePage;
