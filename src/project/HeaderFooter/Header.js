import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faSignInAlt, faBars , faUser  } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API_KEY, MEAL_API } from '../client';
import * as client from '../client';

import {useDispatch} from 'react-redux';

// import { setSearchQuery } from './searchReducer';

import CurrentUser from "../user/currentUser";



function Header() {
  const state = useSelector(state => {
    console.log(state);
    return state;
  });
  const currentUser = useSelector(state => state.userReducer.currentUser);
  useEffect(() => {
    console.log("CurrentUser has changed:", currentUser);
   
  }, [currentUser]);


  const iconStyle = { position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 5 };
  const inputStyle = { paddingLeft: '30px' };
  const navigate = useNavigate();
  const jumpLogin = () => { navigate('/project/login'); };
  const jumpShoppingCart = () => { navigate('/project/shoppingcart'); };

  const jumpSearch = () => { navigate('/project/search'); };
  const jumpHome = () => { navigate('/project'); };

  const jumpAccount = () => {navigate('/project/profile');};


  const [searchTerm, setSearchTerm] = useState("Arrabiata");

  const fetchMeal = async () => {
    const results = await client.findMeal(searchTerm);
    navigate('/project/search', { state: { results } });
  }



  return (
    <CurrentUser>
    <header className="site-header bg-light">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-auto">
          <button
          className="logo-button d-flex align-items-center border-0 bg-transparent" onClick={jumpHome}
          style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faBars} className="menu-icon me-2" />
          <h4>Zbuyer</h4>
          </button>

          </div>
          <div className="col"></div>
          <div className="col-auto">
            <div className="search-section position-relative">
              <FontAwesomeIcon icon={faSearch} style={iconStyle} />
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                style={inputStyle}
                onChange = {event => {setSearchTerm(event.target.value)}}
              />
              <button onClick={fetchMeal} className="btn btn-primary" style={{ width: "100px" }}>Search</button>
            </div>
          </div>
          <div className="col-auto">
            <div className="user-interactions d-flex align-items-center">

              <button className="rounded border p-1 ml-2 btn btn-outline-secondary" onClick={jumpShoppingCart}>
                <FontAwesomeIcon icon={faShoppingCart} className="icon me-2" />
                Cart
              </button>


          {currentUser ? (
          <button onClick={jumpAccount} className="rounded border p-1 ml-2 btn btn-outline-secondary" style={{ width: "200px" }}>
            <FontAwesomeIcon icon={faUser} className="icon me-2" />
            Account
          </button>
        ) : (
          <button onClick={jumpLogin} className="rounded border p-1 ml-2 btn btn-outline-secondary" style={{ width: "200px" }}>
            <FontAwesomeIcon icon={faSignInAlt} className="icon me-2" />
            Sign in
          </button>
        )}

            </div>
          </div>
        </div>

      </div>
    </header>
     </CurrentUser>
  );
}
export default Header;


