import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/App.css';

import Login from './Login';
import UserPage from './UserPage';
import Header from './Header';

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/" component={UserPage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </div>
);

export default App;
