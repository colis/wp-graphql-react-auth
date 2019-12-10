import { execute, makePromise } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

import { REFRESH_TOKEN_MUTATION } from './queries';

const uri = 'https://reactlearning.wpengine.com/graphql/';
const link = new HttpLink({ uri });

export const refreshAccessToken = jwtRefreshToken => {
  return makePromise(
    execute(link, {
      query: REFRESH_TOKEN_MUTATION,
      variables: {
        clientMutationId: 'refreshAuthToken',
        jwtRefreshToken,
      },
    }),
  )
    .then(({ data }) => {
      return data.refreshJwtAuthToken.authToken;
    })
    .catch(() => {
      return null;
    });
};
