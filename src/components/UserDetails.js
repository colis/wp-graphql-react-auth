import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { PROFILE_QUERY } from '../shared/queries';

const UserDetails = () => {
  const { loading, data } = useQuery(PROFILE_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (data) {
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
  }

  return <p>To view the content you must sign in.</p>;
};

export default UserDetails;
