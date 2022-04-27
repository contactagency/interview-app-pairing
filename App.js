import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import MainApp from "./src/Main";

const client = new ApolloClient({
  uri: "https://contact-frontend-test-api.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainApp />
    </ApolloProvider>
  );
}
