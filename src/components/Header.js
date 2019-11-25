import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Header = props => {
  const authToken = localStorage.getItem('auth-token');
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">PragLabs 29</div>
        <Link to="/" className="ml1 no-underline black">
          home
        </Link>
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <button
            className="ml1 black"
            type="button"
            onClick={() => {
              localStorage.removeItem('auth-token');
              props.history.push('/');
            }}
          >
            logout
          </button>
        ) : (
          <Link to="/login" className="ml1 no-underline black">
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(Header);
