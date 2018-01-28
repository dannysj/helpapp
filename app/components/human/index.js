import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Human extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.head}></View>
        <View style={styles.body} >
          <View style={styles.lefthand} ></View>
          <View style={styles.righthand} ></View>
        </View>
        <View>
          <View style={styles.leftleg} >
            <View style={styles.leftfoot} />
          </View>
          <View style={styles.rightleg} >
            <View style={styles.rightfoot} />
          </View>
        </View>
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
    height: 130,
    width: 50,
    borderRadius: 25,
  },
  lefthand: {
    height: 100,
    width: 20,
    backgroundColor: "#ddd",
    borderRadius: 15,
    transform: [{rotate: '55deg'}],
    position: 'absolute',
    top: 0,
    left: -45,
  },

  righthand: {
    height: 100,
    width: 20,
    backgroundColor: "#ddd",
    borderRadius: 10,
    transform: [{rotate: '-55deg'}],
    position: 'absolute',
    top: 0,
    right: -45,
  },

  leftleg: {
    height: 100,
    width: 20,
    backgroundColor: "#ddd",
    borderRadius: 10,
    transform: [{rotate: '40deg'}, {translateY: -35}],
    position: 'absolute',
    top: 0,
    right: 50,
  },
  rightleg: {
    height: 100,
    width: 20,
    backgroundColor: "#ddd",
    borderRadius: 10,
    transform: [{rotate: '-40deg'}, {translateY: -35}],
    position: 'absolute',
    top: 0,
    left: 50,
  },
  leftfoot: {
    height: 50,
    width: 20,
    backgroundColor: "#ddd",
    borderRadius: 15,
    transform: [{rotate: '-80deg'}],
    position: 'absolute',
    bottom: -15,
    right: 15
  },
  rightfoot: {
    height: 50,
    width: 20,
    backgroundColor: "#ddd",
    borderRadius: 15,
    transform: [{rotate: '80deg'}],
    position: 'absolute',
    bottom: -15,
    left: 15
  },


});
