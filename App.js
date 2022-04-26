import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import MainApp from './src/Main';

import getEnvVars from './config';
const { API_URI } = getEnvVars();

const uri = API_URI;
const cache = new InMemoryCache();

// configure Apollo Client
const client = new ApolloClient({
  uri,
  cache
});

export default function App() {
  return (
    <ApolloProvider client={client}>
       <MainApp />
    </ApolloProvider>
  );
}
