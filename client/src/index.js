import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import './assets/styles/output.css';
import App from './components/App';
import Mutations from "./graphql/mutations";

const { VERIFY_USER } = Mutations;
const token = localStorage.getItem("auth-token");
const currentUser = JSON.parse(localStorage.getItem("current-user"));

const cache = new InMemoryCache({
  dataIdFromObject: object => object._id || null
});

cache.writeData({
  data: {
    isLoggedIn: Boolean(token),
    currentUser: Object.assign(currentUser, { __typename: "UserType" })
  }
});

const httpLink = createHttpLink({
  uri: "http://localhost:6660/graphql"
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: cache,
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
  resolvers: {}
});

if (token) {
  client
    .mutate({ mutation: VERIFY_USER, variables: { token } })
    .then(({ data }) => {
      cache.writeData({
        data: { isLoggedIn: data.verifyUser.loggedIn, currentUser: Object.assign(data.verifyUser.currentUser, { __typename: "UserType" }), modal: null }
      });
    });
}


const Root = () => (
  <ApolloProvider client={client}>
    <HashRouter>
      <App />
    </HashRouter>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
