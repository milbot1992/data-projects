import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../Styling/FilmUserSelect.css';

const UserDropdown = ({ onSelectUser }) => {
  const [userIds, setUserIds] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null); // Ensure it's initially set to null

  useEffect(() => {
    // Fetch user IDs from the API
    axios.get('https://calm-cove-97929-723abfdee814.herokuapp.com/user_ids')
      .then(response => {
        // Sort user IDs in ascending order
        const sortedUserIds = response.data.user_ids.sort((a, b) => a - b);
        setUserIds(sortedUserIds);
        // Notify parent component of the selected user
        if (!selectedUserId) {
          // Set the selected user to the lowest user ID if it's not already set
          setSelectedUserId(sortedUserIds[0]);
          onSelectUser(sortedUserIds[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching user IDs:', error);
      });
  }, [onSelectUser, selectedUserId]); // Include selectedUserId in the dependencies array

  const handleUserChange = (userId) => {
    setSelectedUserId(userId);
    onSelectUser(userId);
  };

  return (
    <div className='user-select-section'>
      <label htmlFor="userSelect">Select a user:</label>
      <select id="userSelect" value={selectedUserId} onChange={(e) => handleUserChange(e.target.value)}>
        {userIds.map(userId => (
          <option key={userId} value={userId}>{userId}</option>
        ))}
      </select>
    </div>
  );
};

export default UserDropdown;
