import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animation from 'lottie-react-native';

import load from '../../assets/loader_spinner.json';
import car from '../../assets/car.json';

export default class ContactCard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.helper.play()
    this.car.play()
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.godown}>
          <TouchableOpacity style={styles.profile}>
           <Animation ref={animation => {this.car = animation;}}
                  style= {styles.car}
                  loop={true}
                  source={car} / >

          </TouchableOpacity>
          <Text style={styles.title}> Ambulance </Text>
          <Text> 5 minutes ETA</Text>
        </View>
        <View style={styles.godown}>
          <TouchableOpacity style={styles.profile}>
          <Animation ref={animation => {this.helper = animation;}}
                 style= {styles.anim}
                 loop={true}
                 source={load} / >
          </TouchableOpacity>
          <Text style={styles.title}> Eric Thum </Text>
          <Text> 2 minutes ETA</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEBEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 150,
    borderTopLeftRadius: 120,
    borderTopRightRadius: 120,
    flexDirection: 'row'
  },
  profile: {
    backgroundColor: '#FFCDD2',
    width: 100,
    height: 100,
    borderRadius: 50
  },
  godown: {
    alignItems: 'center',
    top: -50
  },
  title: {
    paddingTop: 5,
    fontSize: 20,
    paddingBottom: 10,
  },
  car: {
    width: 100,
    height: 100,


  }
});
