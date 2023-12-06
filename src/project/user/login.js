import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as client from "./client";

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/Account");
  };



  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleCreateAccount = () => {
    if (role === 'buyer') {
      navigate('/project/buyersignup');
    } else if (role === 'business') {
      navigate('/project/sellersignup');
    }
  };

  return (
    <div className="LoginPage bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            {/* Signin */}
            <div className="mb-4">
              <h2>Sign In</h2>
              <input className="form-control my-3" placeholder="Username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
              <input className="form-control my-3" placeholder="Password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
              <div className="form-check mb-4">
                <input type="checkbox" className="form-check-input" id="keep-signed-in" />
                <label className="form-check-label" htmlFor="keep-signed-in">Keep me signed in</label>
              </div>
              <button type="button" className="btn btn-danger btn-lg btn-block" onClick={signin}>Sign in</button>
            </div>
          </div>


          {/* Create Account */}
          <div className="col-md-6">
            <div className="mb-4">
              <h2>No account yet</h2>
              <p className="my-3">What's your role?</p>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="buyer"
                  name="role"
                  value="buyer"
                  onChange={handleRoleChange}
                  checked={role === 'buyer'}
                />
                <label className="form-check-label" htmlFor="buyer">Buyer</label>
              </div>
              <div className="form-check mb-4">
                <input
                  type="radio"
                  className="form-check-input"
                  id="business"
                  name="role"
                  value="business"
                  onChange={handleRoleChange}
                  checked={role === 'business'}
                />
                <label className="form-check-label" htmlFor="business">Business</label>
              </div>
              <button
                type="button"
                className="btn btn-danger btn-lg btn-block"
                onClick={handleCreateAccount}
              >
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Login;



