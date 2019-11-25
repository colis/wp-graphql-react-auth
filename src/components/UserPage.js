import React from 'react';
import UserDetails from './UserDetails';

const UserPage = props => {
  const authToken = localStorage.getItem('auth-token');

  return (
    <>
      <h4 className="mv3">User details</h4>
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
