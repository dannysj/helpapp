import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import RedSpot from '../redspot';

export default class Human extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isHead:false,
      isBody:false,
      isLeftHand:false,
      isRightHand:false,
      isLeftLeg:false,
      isRightLeg:false,
      isLeftFoot:false,
      isRightFoot:false,
    }

  }

  handlePress(evt, bodypos) {
    console.log('x coord = ' + evt.nativeEvent.locationX + ' with body pos' + bodypos);
    if (bodypos == 1) {
      this.setState({isHead:true, headX: evt.nativeEvent.locationX, headY:evt.nativeEvent.locationY})
    }
    if (bodypos == 2) {

    }
    if (bodypos == 3) {

    }
    if (bodypos == 4) {

    }
    if (bodypos == 5) {

    }
    if (bodypos == 6) {

    }
    if (bodypos == 7) {

    }
  }

  render() {
    return (

      <View style={styles.container}>
        <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 1)}>
          <View style={styles.head}>
            {this.state.isHead ? <RedSpot locationX={this.state.headX} locationY={this.state.headY}/> : <View / > }
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 2)}>
          <View style={styles.body} >
            <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 3)}>
            <View style={styles.lefthand} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 4)}>
            <View style={styles.righthand} />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>

        <View>
          <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 5)}>
            <View style={styles.leftleg} >
              <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 6)}>
                <View style={styles.leftfoot} />
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 7)}>
            <View style={styles.rightleg} >
              <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 8)}>
                <View style={styles.rightfoot} />
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
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
