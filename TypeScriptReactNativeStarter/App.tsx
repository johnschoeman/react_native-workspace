import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Hello from './src/components/Hello';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Hello name="NameProp" enthusiasmLevel={2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
