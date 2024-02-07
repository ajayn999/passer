// UserDetails.js
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserContext from '../context/context';

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const user = users.find(user => user.id === id);

  return (
    <div className='userdetails-outer-container'>
    <div className='userdetails-main-container'>
      <h2 className='userdetails-heading'>User Details</h2>
      {user ? (
        <div className='userdetails-details'>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <div className='userdetails-button-container'>

          <div>

          <Link to={`/user/${id}/edit`}>Edit</Link>
          </div>
          <div>

          <Link to='/'>Home</Link>
          </div>
          </div>
        </div>
      ) : (
        <p>No user found with ID: {id}</p>
      )}
    </div>
    </div>
  );
};

export default UserDetails;
