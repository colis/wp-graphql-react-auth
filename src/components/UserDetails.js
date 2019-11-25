import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const PROFILE_QUERY = gql`
  query getViewer {
    viewer {
      id
      username
      email
    }
  }
`;

const UserDetails = () => {
  const { loading, error, data } = useQuery(PROFILE_QUERY);

  if (loading) return <div>Fetching</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <h4 className="mv3">User details</h4>
      <ul>
        {Object.keys(data.viewer).map(key => (
          <li key={key}>
            {key}: <strong>{data.viewer[key]}</strong>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserDetails;
