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
    }
  }
`;

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [sendLogin, { error }] = useMutation(LOGIN_MUTATION, {
    onCompleted({ login }) {
      localStorage.setItem('auth-token', login.authToken);
      props.history.push('/');
    },
  });

  return (
    <>
      <div>
        <h1>Login</h1>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
          placeholder="Your username"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <button
        type="button"
        onClick={() =>
          sendLogin({ variables: { clientMutationId: 'getAuthToken', username, password } })
        }
      >
        login
      </button>
      {error && <p>Invalid username and/or password.</p>}
    </>
  );
};

export default Login;
