import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Human from '../components/human';
import SOSButton from '../components/SOSButton';
import Internal_External_Selection from '../components/internal_external_selection';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Human style={{flex: 2}}/>
        <Internal_External_Selection style={{flex: 1}}/>
        <SOSButton style={{flex: 1}}/>
      </View>
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
  sosText: {
    color: '#fff',
  }
});
