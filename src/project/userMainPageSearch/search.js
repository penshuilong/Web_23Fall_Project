import React from 'react';
import './UserMainPageSearch.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UserMainPageSearch() {
  // const results = useSelector(state => state.results);
  const location = useLocation();

  //这个const你搜索不存在的东西会出bug 但是新的也不一定对
  // const results = location.state?.results || null;
  const results = location.state?.results || []; 


  const groupedByCategory = {};

  // Group items by category

  results.forEach((result) => {
    const category = result.strCategory;

    if (!groupedByCategory[category]) {
      groupedByCategory[category] = [];
    }

    groupedByCategory[category].push(result);
  });

  return (
    <div className="search-page">
      <nav className="search-navbar">
        <a href="/" className="search-navbar-link search-navbar-link-active">All</a>
        {/* <a href="/chinese" className="search-navbar-link">Chinese Restaurants</a>
        <a href="/french" className="search-navbar-link">French Restaurants</a> */}
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
          <div>
            {Object.keys(groupedByCategory).map((category, index) => (
              <div key={index} style={{ marginBottom: '30px' }}>
                <h2>{category}</h2>
                <div className="container">
                  <div className="row">
                    {groupedByCategory[category].map((item, itemIndex) => (
                      <div key={itemIndex} className="col-md-4">
                        <div className='list-group-item'>
                          <Link to={`/project/productdetail/${item.idMeal}`}>
                          <h4>{item.strMeal}</h4>
                          <img
                            src={item.strMealThumb}
                            alt={item.strMeal}
                            style={{ width: '100px', height: '100px' }}
                          />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        
      </div>
    </div>
  );
}

export default UserMainPageSearch;
