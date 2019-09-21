import React from 'react';
import UserDetails from './UserDetails';

const UserPage = props => {
  const authToken = localStorage.getItem('auth-token');

  return (
    <>
      <h1>User Page</h1>
      {authToken ? (
        <>
          <UserDetails />
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem('auth-token');
              props.history.push('/');
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <div>
          Click <a href="/login">here</a> to login
        </div>
      )}
    </>
  );
};

export default UserPage;
