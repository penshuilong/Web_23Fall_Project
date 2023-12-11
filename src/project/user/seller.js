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
    dob: "",
    role:"SELLER"
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


           
<label className="buyerSignup-label">Birthday</label>
<div className="buyerSignup-birthday-container">


        <select
        className="sellerSignup-select"
        name="birthdayMonth"
        value={credentials.birthdayMonth}
        onChange={(e) => setCredentials({ ...credentials, birthdayMonth: e.target.value })}>
            <option value="">Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </select>

      
        <select
        className="sellerSignup-select"
        name="birthdayDay"
        value={credentials.birthdayDay}
        onChange={(e) => setCredentials({ ...credentials, birthdayDay: e.target.value })}>
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
                <option key={i+1} value={String(i+1).padStart(2, '0')}>{i+1}</option>))}
        </select>


      </div>
    </div>
  );
}

export default SellerSignup;
