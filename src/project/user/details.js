import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as client from "./client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as followsClient from "../follows/client";
import * as likesClient from "../likes/client";


function UserDetails() {
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const { currentUser } = useSelector((state) => state.userReducer);
  const { id } = useParams();
  const fetchLikes = async () => {
    const likes = await likesClient.findMealsThatUserLikes(id);
    setLikes(likes);
  };
  const navigate = useNavigate();
  const fetchUser = async () => {
    const user = await client.findUserById(id);
    setUser(user);
  };

  const followUser = async () => {
    const status = await followsClient.userFollowsUser(id);
  };
  const unfollowUser = async () => {
    const status = await followsClient.userUnfollowsUser(id);
  };
  const fetchFollowers = async () => {
    const followers = await followsClient.findFollowersOfUser(id);
    setFollowers(followers);
  };
  const fetchFollowing = async () => {
    const following = await followsClient.findFollowedUsersByUser(id);
    setFollowing(following);
  };

  const alreadyFollowing = () => {
    return followers.some((follows) => {
      return follows.follower._id === currentUser._id;
    });
  };
  useEffect(() => {
    fetchUser();
    fetchLikes();
    fetchFollowers();
    fetchFollowing();
  }, [id]);
  return (
    <div className="ms-5">
      {currentUser && currentUser._id !== id && (
        <>
          {alreadyFollowing() ? (
            <button onClick={unfollowUser} className="btn btn-danger float-end">
              Unfollow
            </button>
          ) : (
            <button onClick={followUser} className="btn btn-warning float-end">
              Follow
            </button>
          )}
        </>
      )}
      <h2>User Details</h2>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          
          <h3>Likes</h3>
          <ul className="list-group">
            {likes.map((like, index) => (
              <li key={index} className="list-group-item">
                <Link to={`/project/details/${like.idMeal}`}>
                <img src={like.strMealThumb} alt={like.strMeal} style={{ width: '100px', height: '100px' }} />
                  {like.strMeal}
                </Link>
              </li>
            ))}
          </ul>
          <h3>Followers</h3>
          <div className="list-group">
            {followers.map((follows, index) => (
              <Link
                key={index}
                className="list-group-item"
                to={`/project/profile/${follows.follower._id}`}
              >
                {follows.follower.username}
                
              </Link>
            ))}
          </div>
          <h3>Following</h3>
          <div className="list-group">
            {following.map((follows, index) => (
              <Link
                key={index}
                className="list-group-item"
                to={`/project/profile/${follows.followed._id}`}
              >
                {follows.followed.username}
                
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
