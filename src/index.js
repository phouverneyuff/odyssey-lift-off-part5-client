import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri:
    process.env.REACT_APP_GRAPHQL_URL ||
    'https://server-production-1e4f.up.railway.app/', // change this to YOUR server URI
  cache: new InMemoryCache(),
  name: 'web',
  version: '1.0',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
