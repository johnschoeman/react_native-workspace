import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { ApolloClient, ApolloProvider } from 'react-apollo';

import Root from './components/root';

const client = new ApolloClient();

const App = () => (
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
);

export default App;

AppRegistry.registerComponent('SpotMe', () => App);