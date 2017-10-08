import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import PostList from './app/PostList';
import CreatePost from './app/CreatePost';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj8iwzfzd04k60174wagtou6d' }),
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <View style={styles.container}>
          <Text>Hello World!</Text>
          <PostList />
          <CreatePost />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
