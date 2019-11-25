import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const LOGIN_MUTATION = gql`
  mutation loginAndGetTokenAndUser(
    $clientMutationId: String!
    $username: String!
    $password: String!
  ) {
    login(
      input: { clientMutationId: $clientMutationId, username: $username, password: $password }
    ) {
      authToken
      refreshToken
    }
  }
`;

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [sendLogin, { error }] = useMutation(LOGIN_MUTATION, {
    onCompleted({ login }) {
      localStorage.setItem('auth-token', login.authToken);
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
