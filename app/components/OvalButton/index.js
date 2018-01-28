import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class OvalButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View>
          <Text style={styles.textWhite}>Internal</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#FABE58',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 150,
    borderRadius: 30,
  },
  textWhite: {
    color: '#fff',
    fontSize: 20
  }
});
