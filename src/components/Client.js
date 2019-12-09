import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { RetryLink } from 'apollo-link-retry';

import { refreshAccessToken } from '../shared/auth';

const httpLink = createHttpLink({
  uri: 'https://reactlearning.wpengine.com/graphql/',
});

const retryLink = new RetryLink({
  delay: {
    initial: 0,
  },
  attempts: {
    max: 2,
    retryIf: async err => {
      switch (err.statusCode) {
        case 403:
          // token is invalid, try and renew
          try {
            const refreshToken = localStorage.getItem('refresh-token');
            const authToken = await refreshAccessToken(refreshToken);

            localStorage.setItem('auth-token', authToken);
          } catch (error) {
            return false;
          }
          return true;
        default:
          return true;
      }
    },
  },
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const authToken = localStorage.getItem('auth-token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: authToken ? `Bearer ${authToken}` : '',
    },
  };
});

export const Client = new ApolloClient({
  link: ApolloLink.from([retryLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});
