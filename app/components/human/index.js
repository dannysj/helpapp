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
      if (this.state.isHead) {
        this.setState({isHead:false})
        console.log('reset head')
      }
      this.setState({isHead:true, headX: evt.nativeEvent.locationX, headY:evt.nativeEvent.locationY})
    }
    if (bodypos == 2) {
      this.setState({isBody:true, bodyX: evt.nativeEvent.locationX, bodyY:evt.nativeEvent.locationY})
    }
    if (bodypos == 3) {
      this.setState({isLeftHand:true, lhx: evt.nativeEvent.locationX, lhy:evt.nativeEvent.locationY})
    }
    if (bodypos == 4) {
      this.setState({isRightHand:true, rhx: evt.nativeEvent.locationX, rhy:evt.nativeEvent.locationY})
    }
    if (bodypos == 5) {
        this.setState({isLeftLeg:true, llx: evt.nativeEvent.locationX, lly:evt.nativeEvent.locationY})
    }
    if (bodypos == 7) {
      this.setState({isRightLeg:true, rlx: evt.nativeEvent.locationX, rly:evt.nativeEvent.locationY})
    }
    if (bodypos == 6) {
        this.setState({isLeftFoot:true, lfx: evt.nativeEvent.locationX, lfy:evt.nativeEvent.locationY})
    }
    if (bodypos == 8) {
        this.setState({isRightFoot:true, rfx: evt.nativeEvent.locationX, rfy:evt.nativeEvent.locationY})
    }
  }

  render() {
    console.log('render called' + this.state.isHead);
    return (

      <View style={styles.container}>
        <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 1)}>
          <View style={styles.head}>
            {this.state.isHead ? <RedSpot locationX={this.state.headX} locationY={this.state.headY}/> : <View / > }
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 2)}>
          <View style={styles.body} >
              {this.state.isBody ? <RedSpot locationX={this.state.bodyX} locationY={this.state.bodyY}/> : <View / > }
            <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 3)}>
            <View style={styles.lefthand}>
                {this.state.isLeftHand ? <RedSpot locationX={this.state.lhx} locationY={this.state.lhy}/> : <View / > }
            </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 4)}>
            <View style={styles.righthand}>
                {this.state.isRightHand ? <RedSpot locationX={this.state.rhx} locationY={this.state.rhy}/> : <View / > }
            </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>

        <View>
          <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 5)}>
            <View style={styles.leftleg} >
                {this.state.isLeftLeg ? <RedSpot locationX={this.state.llx} locationY={this.state.lly}/> : <View / > }
              <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 6)}>
                <View style={styles.leftfoot}>
                    {this.state.isLeftFoot ? <RedSpot locationX={this.state.lfx} locationY={this.state.lfy}/> : <View / > }
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 7)}>
            <View style={styles.rightleg} >
                {this.state.isRightLeg ? <RedSpot locationX={this.state.rlx} locationY={this.state.rly}/> : <View / > }
              <TouchableWithoutFeedback onPress= {(evt) => this.handlePress(evt, 8)}>
                <View style={styles.rightfoot}>
                  {this.state.isRightFoot ? <RedSpot locationX={this.state.rfx} locationY={this.state.rfy}/> : <View / > }
                </View>
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
