import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faSignInAlt, faBars  } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
 

  const iconStyle = { position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 5 };
  const inputStyle = { paddingLeft: '30px' };


  return (
    <header className="site-header bg-light">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-auto">
          <div className="logo-section d-flex align-items-center">
              <FontAwesomeIcon icon={faBars} className="menu-icon me-2" />
              <h4>Zbuyer</h4>
            </div>
          </div>
          <div className="col"></div>
          <div className="col-auto">
            <div className="search-section position-relative">
              <FontAwesomeIcon icon={faSearch} style={iconStyle} />
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                style={inputStyle}
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="user-interactions d-flex align-items-center">
              
              <span class="rounded border border-secondary p-1 ml-2">
                <FontAwesomeIcon icon={faShoppingCart} className="icon me-2" />Cart: 0 items
              </span>

              {/* <button className="rounded border border-secondary p-1 ml-2" >
                <FontAwesomeIcon icon={faSignInAlt} className="icon me-2" />
                Sign in
              </button> */}
              <Link to="/login">
                <button className="rounded border border-secondary p-1 ml-2" >
                  <FontAwesomeIcon icon={faSignInAlt} className="icon me-2" />
                    Sign in
                </button>
              </Link>


            </div>
          </div>
        </div>
        
      </div>
    </header>
  );
}

export default Header;


