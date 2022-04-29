import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
} from "@apollo/client";
import Constants from "expo-constants";
import MainApp from "./src/Main";
import { ENV } from "./config";

const env = Constants?.manifest?.extra?.useDevApi ? ENV.dev : ENV.prod;

const client = new ApolloClient({
  uri: env.API_URI,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainApp />
    </ApolloProvider>
  );
}
