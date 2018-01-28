import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class OvalButton extends React.Component {
  var funcHandler;
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      text:this.props.text,
    }
    funcHandler = this.props.onTapped;
  }
  render() {
    return (
      <TouchableOpacity style={[styles.container,{backgroundColor:this.state.color}]} onPress=funcHandler>
        <View>
          <Text style={styles.textWhite}>{this.state.text}</Text>
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
