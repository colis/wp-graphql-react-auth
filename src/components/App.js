import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/App.css';

import Login from './Login';
import UserDetails from './UserDetails';
import Header from './Header';

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/" component={UserDetails} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </div>
);

export default App;
