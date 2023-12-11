import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './BuyerSignup.css'; 
import * as client from "./client";
function BuyerSignup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    deliveryAddress:"",
    birthdayMonth: "",
    birthdayDay: "",
    dob: "" ,
    role:"USER"
  });
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await client.signup({
        ...credentials,
        dob: `${credentials.birthdayMonth}-${credentials.birthdayDay}`
      });
      console.log("?")
      navigate("/project/profile");
    } catch (err) {
      setError(err.response.data.message);
    }
  };



  return (
    <div className="buyerSignup-container">
      <h1>Sign Up</h1>
      {error && <div className="buyerSignup-error">{error}</div>}
      <label>Username</label>
      <input
        className="sellerSignup-input"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <label>First Name</label>
      <input
        className="buyerSignup-input"
        value={credentials.firstName}
        onChange={(e) => setCredentials({ ...credentials, firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        className="buyerSignup-input"
        value={credentials.lastName}
        onChange={(e) => setCredentials({ ...credentials, lastName: e.target.value })}
      />
      <label>Email Address</label>
      <input
        className="buyerSignup-input"
        type="email"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      />
      <label>Password</label>
      <input
        className="buyerSignup-input"
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />

      <label>Delivery Address</label>
      <input
        className="buyerSignup-input"
        type="deliveryAddress"
        value={credentials.deliveryAddress}
        onChange={(e) => setCredentials({ ...credentials, deliveryAddress: e.target.value })}
      />

      
<label className="buyerSignup-label">Birthday</label>
<div className="buyerSignup-birthday-container">


        <select
        className="buyerSignup-select"
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
        className="buyerSignup-select"
        name="birthdayDay"
        value={credentials.birthdayDay}
        onChange={(e) => setCredentials({ ...credentials, birthdayDay: e.target.value })}>
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
                <option key={i+1} value={String(i+1).padStart(2, '0')}>{i+1}</option>))}
        </select>


      </div>
      <button className="buyerSignup-button" onClick={signup}>
        Sign Up
      </button>
    </div>
  );
}

export default BuyerSignup;
