import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './app/store';
import RootScreen from './app/components';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    );
  }
}
