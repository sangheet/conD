import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
  //uri: "https://rickandmortyapi.com/graphql",
  uri: "http://23.239.19.17:9999/graphql/",
  //uri: "https://n161.tech/api/dummyapi/user",
  /*fetchOptions: {
    mode: 'no-cors',
  }*/
 
});




ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
