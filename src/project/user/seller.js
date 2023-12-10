import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SellerSignup.css'; 
import * as client from "./client";

function SellerSignup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    restaurantName: "",
    restaurantAddress: "",
    email: "",
    password: "",
    birthdayMonth: "",
    birthdayDay: "",
    dob: ""
  });
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await client.signup({
        ...credentials,
        dob: `${credentials.birthdayMonth}-${credentials.birthdayDay}`
      });
      navigate("/project/profile");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="sellerSignup-container">
      <h1>Sign Up</h1>
      {error && <div className="sellerSignup-error">{error}</div>}

      <label>Username</label>
      <input
        className="sellerSignup-input"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <label>First Name</label>
      <input
        className="sellerSignup-input"
        value={credentials.firstName}
        onChange={(e) => setCredentials({ ...credentials, firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        className="sellerSignup-input"
        value={credentials.lastName}
        onChange={(e) => setCredentials({ ...credentials, lastName: e.target.value })}
      />
      <label>Restaurant Name</label>
      <input
        className="sellerSignup-input"
        value={credentials.restaurantName}
        onChange={(e) => setCredentials({ ...credentials, restaurantName: e.target.value })}
      />
      <label>Restaurant Address</label>
      <input
        className="sellerSignup-input"
        value={credentials.restaurantAddress}
        onChange={(e) => setCredentials({ ...credentials, restaurantAddress: e.target.value })}
      />
      <label>Email Address</label>
      <input
        className="sellerSignup-input"
        type="email"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      />
      <label>Password</label>
      <input
        className="sellerSignup-input"
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button className="sellerSignup-button" onClick={signup}>Sign up</button>
    </div>
  );
}

export default SellerSignup;
