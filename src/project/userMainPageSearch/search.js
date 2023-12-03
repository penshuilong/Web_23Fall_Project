import React from 'react';
import './UserMainPageSearch.css';

function UserMainPageSearch() {
  return (
    <div className="search-page">
      <nav className="search-navbar">
        <a href="/" className="search-navbar-link search-navbar-link-active">All</a>
        <a href="/chinese" className="search-navbar-link">Chinese Restaurants</a>
        <a href="/french" className="search-navbar-link">French Restaurants</a>
      </nav>

      <div className="search-main-content">
        <aside className="search-filter-bar">
          <div className="search-filter-section">
            <p className="search-filter-title">Sort</p>
            <label className="search-filter-option"><input type="radio" name="sort" defaultChecked /> Recommended</label>
            <label className="search-filter-option"><input type="radio" name="sort" /> Most Popular</label>
            <label className="search-filter-option"><input type="radio" name="sort" /> Rating</label>
          </div>
          <div className="search-filter-section">
            <p className="search-filter-title">Area</p>
            <label className="search-filter-option"><input type="radio" name="area" /> China</label>
            <label className="search-filter-option"><input type="radio" name="area" /> Korea</label>
            <label className="search-filter-option"><input type="radio" name="area" /> France</label>
          </div>
        </aside>

        <main className="search-shop-container">
          {[1, 2, 3].map(shopId => (
            <div className="search-shop-card" key={shopId}>
              <div className="search-shop-image"></div>
              <div className="search-shop-info">
                <div className="search-shop-title">Shop {shopId}</div>
                <div className="search-meals">
                  {[1, 2, 3].map(mealId => (
                    <div className="search-meal" key={mealId}>Meal name{mealId}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <button className="search-show-more btn btn-outline-secondary mx-auto d-block" style={{ width: "150px" }}>Show More</button>


        </main>
      </div>
    </div>
  );
}

export default UserMainPageSearch;
