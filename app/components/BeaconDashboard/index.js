import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animation from 'lottie-react-native';

import load from '../../assets/loading_check_mark.json';

export default class BeaconDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      foundAmbulance:false,
      foundHelper:false,
      foundVideo:false,
    }
  }

  componentDidMount() {
    this.ambulance.play();
    this.personaldoc.play();
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sector}>
          <Animation ref={animation => {this.ambulance = animation;}}
                 style= {styles.anim}
                 loop={true}
                 source={load} / >
          <Text style={styles.title}>Finding an ambulance... </Text>
        </View>
        <View style={styles.sector}>
          <Animation ref={animation => {this.personaldoc = animation;}}
                 style= {styles.anim}
                 loop={true}
                 source={load} / >
          <Text style={styles.title}>Seeking for nearest professional helper.. </Text>
        </View>
        <View style={styles.sector}>
          <Animation ref={animation => {this.animation = animation;}}
                 style= {styles.anim}
                 loop={true}
                 source={load} / >
                 <Text style={styles.title}>Connecting professional helper to you ... </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',

  },
  anim: {

    width:80,
    height: 80
  },
  sector: {
    position: 'relative',
    flexDirection: 'row',
    left:20,
    top: 20,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    width: '70%'
  }

});
