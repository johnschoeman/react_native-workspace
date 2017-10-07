import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Link extends Component {

  render() {
    return (
       <Text>{this.props.link.description} ({this.props.link.url})</Text>
    );
  }
  

}

export default Link;