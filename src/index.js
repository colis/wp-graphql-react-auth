import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Client } from './components/Client';

import './styles/index.css';

import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={Client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
