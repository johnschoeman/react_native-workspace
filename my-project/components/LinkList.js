import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { graphql, gql } from 'react-apollo';
// import gql from 'graphql-tag';

class LinkList extends Component {

  render() {

    const linksToRender = [{
      id: '1',
      description: 'The Coolest GraphQL Backend 😎',
      url: 'https://www.graph.cool'
    }, {
      id: '2',
      description: 'The Best GraphQL Client',
      url: 'http://dev.apollodata.com/'
    }];

    return (
      <View>
        {linksToRender.map(link => (
          <View key={link.id}>
            <Text>link: {link.description}
                  url: {link.url}
            </Text>
          </View>
        ))}
      </View>
    );
  }

}

const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`;

// export default graphql(ALL_LINKS_QUERY, {name: 'allLinksQuery' })(LinkList);
export default LinkList;