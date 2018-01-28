import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Human extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head} />
        <View>
        <View style={styles.body} />
        <View style={styles.lefthand} />
        <View style={styles.righthand} />
        </View>
        <View style={styles.leftleg} />
        <View style={styles.rightleg} />








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
  head: {
    height: 100,
    width: 100,
    backgroundColor: "#ddd",
    borderRadius: 50,
  },
  body: {
    backgroundColor: "#ddd",
    height: 150,
    width: 50,
    borderRadius: 25,
  },
  lefthand: {
    height: 80,
    width: 20,
    backgroundColor: "#ddd",
    borderRadius: 15,
    transform: [{rotate: '30deg'}],
    position: 'relative',
    top: 0,
  },

  righthand: {
    height: 80,
    width: 20,
    backgroundColor: "#ddd",
    borderRadius: 7.5,
    transform: [{rotate: '-30deg'}]
  },

  leftleg: {
    height: 60,
    width: 20,
    backgroundColor: "#ddd",
    borderRadius: 7.5,
    transform: [{rotate: '7deg'}]
  },
  rightleg: {
    height: 60,
    width: 20,
    backgroundColor: "#ddd",
    borderRadius: 7.5,
    transform: [{rotate: '-7deg'}]
  },
  leftfoot: {
    height: 60,
    width: 20,
    backgroundColor: "#ddd",
    borderRadius: 15,
    transform: [{rotate: '-80deg'}]
  },
  rightfoot: {
    height: 30,
    width: 30,
    backgroundColor: "#ddd",
    borderRadius: 15,
    transform: [{rotate: '80deg'}]
  },


});
