import React, { useState } from 'react';

const Profile = () => {
  // State for profile information
  const [profile, setProfile] = useState({
    restaurantName: 'Example Restaurant',
    description: 'A cozy place with an extensive menu of classic dishes.',
    username: 'chefmaster',
    location: 'Downtown, Foodville'
  });

  // State to track if the profile is being edited
  const [isEditing, setIsEditing] = useState(false);

  // Handles the change of input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  // Toggles the edit state
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handles the saving of the profile (you might want to add API call here)
  const saveProfile = (event) => {
    event.preventDefault();
    toggleEdit();
    // API call would go here to save profile changes
  };

  return (
    <div>
      <h1>{isEditing ? 'Edit Profile' : 'Profile'}</h1>
      {isEditing ? (
        <form onSubmit={saveProfile}>
          <label>
            Restaurant's Name:
            <input type="text" name="restaurantName" value={profile.restaurantName} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Description:
            <textarea name="description" value={profile.description} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Username:
            <input type="text" name="username" value={profile.username} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Location:
            <input type="text" name="location" value={profile.location} onChange={handleInputChange} />
          </label>
          <br />
          <button type="submit">Save</button>
          <button type="button" onClick={toggleEdit}>Cancel</button>
        </form>
      ) : (
        <div>
          <p>Restaurant's Name: {profile.restaurantName}</p>
          <p>Description: {profile.description}</p>
          <p>Username: {profile.username}</p>
          <p>Location: {profile.location}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;

