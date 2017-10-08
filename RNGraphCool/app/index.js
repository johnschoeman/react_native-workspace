import React from 'react';
import {
  AppRegistry
} from 'react-native';

import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

const wsClient = new SubscriptionClient('wss://subscriptions.us-west-2.graph.cool/v1/cj8hz8ti6047m019635oj80u5');

const networkInterface = createNetworkInterface({
  uri: `https://api.graph.cool/simple/v1/cj8hz8ti6047m019635oj80u5`
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});

import App from './app';

const ApolloApp = () => (
  <ApolloProvider client={client} >
    <App/>
  </ApolloProvider>
);

AppRegistry.registerComponent('RNGraphCool', () => ApolloApp );