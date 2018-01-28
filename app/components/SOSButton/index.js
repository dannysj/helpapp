import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class SOSButton extends React.Component {
  constructor(props){
    super(props);
    this.SOSHandler = this.props.onTapped
  }
  render() {
    return (
      <View style={{flex:1/2}}>
        <TouchableOpacity style={styles.container} onPress={this.SOSHandler}>
          <Text style={styles.sosText}>Help!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F03434',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  sosText: {
    color: '#fff',
    fontSize: 30,
  }
});
