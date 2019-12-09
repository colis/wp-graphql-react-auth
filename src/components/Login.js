import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { LOGIN_MUTATION } from '../shared/queries';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [sendLogin, { error }] = useMutation(LOGIN_MUTATION, {
    onCompleted({ login }) {
      localStorage.setItem('auth-token', login.authToken);
      localStorage.setItem('refresh-token', login.refreshToken);
      history.push('/');
    },
  });

  return (
    <>
      <h4 className="mv3">Login</h4>
      <div className="flex flex-column">
        <input
          className="mb2"
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
          placeholder="Your username"
        />
        <input
          className="mb2"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <button
          className="mr2 button"
          onClick={() =>
            sendLogin({ variables: { clientMutationId: 'getAuthToken', username, password } })
          }
        >
          login
        </button>
      </div>
      {error && <p>Invalid username and/or password.</p>}
    </>
  );
};

export default Login;
