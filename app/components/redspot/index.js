import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RedSpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.locationX,
      y: props.locationY,
    }
  }
  render() {
    console.log('x coord at = ' + this.state.x);
    positionstyle = StyleSheet.create({toptest:{top: this.state.y - 15, left: this.state.x - 15}});
    return (
      <View style={[styles.redspot, positionstyle.toptest]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  redspot: {
    position: 'relative',
    backgroundColor: '#F03434',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});
