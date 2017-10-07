import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

import Root from './components/Root';

const client = new ApolloClient();

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj8hofwwr00d20196rfty11ga'
});

const App = () => (
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
);

export default App;

// AppRegistry.registerComponent('SpotMe', () => App);