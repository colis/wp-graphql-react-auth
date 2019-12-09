import gql from 'graphql-tag';

export const PROFILE_QUERY = gql`
  query getViewer {
    viewer {
      id
      username
      email
    }
  }
`;

export const LOGIN_MUTATION = gql`
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

export const REFRESH_TOKEN_MUTATION = gql`
  mutation refreshToken($jwtRefreshToken: String!, $clientMutationId: String!) {
    refreshJwtAuthToken(
      input: { clientMutationId: $clientMutationId, jwtRefreshToken: $jwtRefreshToken }
    ) {
      authToken
    }
  }
`;
