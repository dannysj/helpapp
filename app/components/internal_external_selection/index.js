import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OvalButton from '../OvalButton';

export default class Internal_External_Selection extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <OvalButton />
        <OvalButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1/4,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 100,
    width: '100%',
  },
});
