import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearCurrentUser } from "./reducer";

function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    console.log('Updating account:', account);
    await client.updateUser(account);
  };
  
  
  const dispatch = useDispatch();
  const signout = async () => {
    await client.signout();
    dispatch(clearCurrentUser()); 
    navigate("/project/Login");
  };




  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);


  return (
    <div className="w-50 ms-5 mb-3">
      <h1>Profile</h1>
      {account && (
        <div>
          <h5>Username</h5>
          <input value={account.username}
            onChange={(e) => setAccount({ ...account,
              username: e.target.value })}/>
          <h5>Password</h5>
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <h5>First Name</h5>
          <input value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <h5>Last Name</h5>
          <input value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <h5>Date of Birth</h5>
          <input value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <h5>Email</h5>
          <input value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          

          {/* Conditional rendering based on the role */}
          
          {account.role === 'USER' && (
            <>
              <h5>Delivery Address</h5>
              <input value={account.deliveryAddress}
                onChange={(e) => setAccount({ ...account,
                  deliveryAddress: e.target.value })}/>

            </>
          )}

          {account.role === 'ADMIN' && (
            <>
              <h5>Admin Duration</h5>
              <input value={account.adminDuration}
                onChange={(e) => setAccount({ ...account,
                  adminDuration: e.target.value })}/>

            </>
          )}

          {account.role === 'SELLER' && (
            <>
              <h5>Restaurant Name</h5>
              <input value={account.restaurantName}
                onChange={(e) => setAccount({ ...account,
                  restaurantName: e.target.value })}/>

              <h5>Restaurant Address</h5>
              <input value={account.restaurantAddress}
                onChange={(e) => setAccount({ ...account,
                  restaurantAddress: e.target.value })}/>
            </>
          )}
          <br/><br/>
          <p>Role: {account.role}</p>
          <br/><br/>
       
          <button onClick={save} className="btn btn-secondary">Save</button>
          <br/><br/>

          {account.role === 'ADMIN' && (
            <Link to="/project/admin/users" className="btn btn-warning w-100 mb-1">
              Users
            </Link>
          )}
         

            <button onClick={signout} className="btn btn-primary w-100 mb-1">Signout
            </button>

          
          <Link to="/project/" className="btn btn-success w-100 mb-1">
            Back to Mainpage
            </Link>

        </div>
      )}
    </div>
  );
}
export default Account;
