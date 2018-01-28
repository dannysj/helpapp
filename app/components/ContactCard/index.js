import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class ContactCard extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.godown}>
          <TouchableOpacity style={styles.profile}>

          </TouchableOpacity>
          <Text> Ambulance </Text>
          <Text> 5 minutes </Text>
        </View>
        <View style={styles.godown}>
          <TouchableOpacity style={styles.profile}>

          </TouchableOpacity>
          <Text> Eric Thum </Text>
          <Text> 2 minutes </Text>
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
    height: 300,
    borderRadius: 80,
  },
  profile: {
    backgroundColor: '#FFCDD2',
    width: 100,
    height: 100,
    borderRadius: 50
  },
  godown: {

  }
});
