import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Header = () => {
  const authToken = localStorage.getItem('auth-token');

  const logoutHandler = event => {
    if (event.type === 'click' || (event.type === 'keydown' && event.keyCode === 13)) {
      localStorage.removeItem('auth-token');
      localStorage.removeItem('refresh-token');
      window.location.reload(false);
    }
  };

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
          <div
            role="button"
            className="ml1 black pointer"
            tabIndex="0"
            onClick={logoutHandler}
            onKeyDown={logoutHandler}
          >
            logout
          </div>
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
