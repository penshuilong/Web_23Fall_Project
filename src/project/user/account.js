import * as client from "./client";
import { clearCurrentUser } from "./reducer";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as followsClient from "../follows/client";
import * as likesClient from "../likes/client";


function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [likes, setLikes] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const { currentUser } = useSelector((state) => state.userReducer);

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
  const fetchLikes = async () => {
    if (!id) return;
    const likes = await likesClient.findMealsThatUserLikes(id);
    setLikes(likes);
  };

  const fetchFollowers = async () => {
    if (!id) return;
    const followers = await followsClient.findFollowersOfUser(id);
    setFollowers(followers);
  };

  const fetchFollowing = async () => {
    if (!id) return;
    const following = await followsClient.findFollowedUsersByUser(id);
    setFollowing(following);
  };




  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);


  useEffect(() => {
    if (currentUser) {
      fetchLikes();
      fetchFollowers();
      fetchFollowing();
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser?._id) {
        try {
          const likesData = await likesClient.findMealsThatUserLikes(currentUser._id);
          setLikes(likesData);
          const followersData = await followsClient.findFollowersOfUser(currentUser._id);
          setFollowers(followersData);
          const followingData = await followsClient.findFollowedUsersByUser(currentUser._id);
          setFollowing(followingData);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      }
    };
  
    fetchData();
  }, [currentUser]);
  


return (
  <div className="container">
    <h1>Profile</h1>
    {account && (
      <>
        <div className="row">
          <div className="col-md-6">
            {/* Profile Information */}
            <h5>Username</h5>
            <input 
              className="form-control mb-2"
              value={account.username}
              onChange={(e) => setAccount({ ...account, username: e.target.value })}
            />
            <h5>Password</h5>
            <input 
              className="form-control mb-2"
              value={account.password}
              onChange={(e) => setAccount({ ...account, password: e.target.value })}/>

            <h5>First Name</h5>
            <input 
            className="form-control mb-2"
            value={account.firstName}
            onChange={(e) => setAccount({ ...account,firstName: e.target.value })}/>

            <h5>Last Name</h5>
            <input 
            className="form-control mb-2"
            value={account.lastName} 
            onChange={(e) => setAccount({ ...account,lastName: e.target.value })}/>

            <h5>Date of Birth</h5>
            <input
            className="form-control mb-2" 
            value={account.dob}
            onChange={(e) => setAccount({ ...account,dob: e.target.value })}/>

            <h5>Email</h5>
            <input
            className="form-control mb-2" 
            value={account.email}
            onChange={(e) => setAccount({ ...account,email: e.target.value })}/>
          

           {/* Conditional rendering based on the role */}
          
           {account.role === 'USER' && (
            <>
              <h5>Delivery Address</h5>
              <input 
              className="form-control mb-2"
              value={account.deliveryAddress}
              onChange={(e) => setAccount({ ...account,deliveryAddress: e.target.value })}/>
            </>
          )}

           {account.role === 'ADMIN' && (
            <>
              <h5>Admin Duration</h5>
              <input 
              className="form-control mb-2"
              value={account.adminDuration}
                onChange={(e) => setAccount({ ...account,adminDuration: e.target.value })}/>

            </>
          )}

           {account.role === 'SELLER' && (
            <>
              <h5>Restaurant Name</h5>
              <input 
              className="form-control mb-2"
              value={account.restaurantName}
              onChange={(e) => setAccount({ ...account,restaurantName: e.target.value })}/>

              <h5>Restaurant Address</h5>
              <input 
              className="form-control mb-2"
              value={account.restaurantAddress}
              onChange={(e) => setAccount({ ...account,restaurantAddress: e.target.value })}/>
            </>
          )}
          <br/><br/>
          <p className="mb-3">Role: {account.role}</p>

            <button onClick={save} className="btn btn-secondary mb-3">Save</button>
          </div>

          <div className="col-md-6">
            
            <h3 className="mb-3">Likes</h3>
            {likes.length === 0 ? (
               <p>None</p>
               ) : (
                <ul className="list-group">
                  {likes.map((like, index) => (
                    <li key={index} className="list-group-item">
                      <Link to={`/project/productdetail/${like.idMeal}`} className="text-dark text-decoration-none">
                       <img src={like.strMealThumb} alt={like.strMeal} style={{ width: '100px', height: '100px' }} />
                       {like.strMeal}
                      </Link>
                    </li>
                 ))}
                 </ul>
             )}
            <h3 className="mb-3">Followers</h3>
                   {followers.length === 0 ? (
                    <p>None</p>
                    ) : (
                      <div className="list-group">
                        {followers.map((follower, index) => (
                          <Link key={index} className="list-group-item" to={`/project/profile/${follower._id}`}>
                            {follower.follower.username}
                            </Link>
                            ))}
                      </div>
                      )}

            <h3 className="mb-3">Following</h3>
            {following.length === 0 ? (
              <p>None</p>
              ) : (
                <div className="list-group">
                  {following.map((follows, index) => (
                    <Link key={index} className="list-group-item" to={`/project/profile/${follows.followed._id}`}>
                      {follows.followed.username}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        

        <div className="row mt-4">
          <div className="col text-center">
            {account.role === 'ADMIN' && (
              <Link to="/project/admin/users" className="btn btn-warning w-50 mb-1">
                Users
              </Link>
            )}
          {account.role === 'SELLER' && (
  <Link to={`/project/sellermainpage/${account.username}`} className="btn btn-warning w-50 mb-1">
    My Restaurant
  </Link>
)}

            <br/>
            <button onClick={signout} className="btn btn-primary w-50 mb-1">Signout</button>
            <br/>
            <Link to="/project/" className="btn btn-success w-50 mb-1">
              Back to Mainpage
            </Link>
          </div>
        </div>
      </>
    )}
  </div>
);
}

export default Account;