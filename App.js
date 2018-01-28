import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import Home from './app/home/';

export default class App extends React.Component {
  render() {
    return (

      <NavigatorIOS
        initialRoute={{
          component: Home,
          title: 'Home',
          navigationBarHidden: true,

        }}
        style = {{flex: 1}}
      />
    );
  }
}
