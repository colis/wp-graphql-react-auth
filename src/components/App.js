import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/App.css';

import Login from './Login';
import UserPage from './UserPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={UserPage} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default App;
