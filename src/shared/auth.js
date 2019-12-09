import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { REFRESH_TOKEN_MUTATION } from './queries';

const httpLink = createHttpLink({
  uri: 'https://reactlearning.wpengine.com/graphql/',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const refreshAccessToken = jwtRefreshToken => {
  return client
    .mutate({
      mutation: REFRESH_TOKEN_MUTATION,
      variables: {
        clientMutationId: 'refreshAuthToken',
        jwtRefreshToken,
      },
    })
    .then(({ data }) => {
      return data.refreshJwtAuthToken.authToken;
    })
    .catch(() => {
      return null;
    });
};
