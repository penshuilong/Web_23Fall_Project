import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="login-form">
        <div className="section sign-in-section">
          <h2>Sign In</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="checkbox-container">
            <input type="checkbox" id="keep-signed-in" />
            <label htmlFor="keep-signed-in">Keep me signed in</label>
          </div>
          <button type="submit">Sign in</button>
        </div>
        <div className="divider"></div>
        <div className="section create-account-section">
          <h2>No account yet</h2>
          <p>What is your role?</p>
          <label>
            <input type="radio" name="role" value="buyer" />
            Buyer
          </label>
          <label>
            <input type="radio" name="role" value="business" />
            Business
          </label>
          <button type="button">Create account</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
