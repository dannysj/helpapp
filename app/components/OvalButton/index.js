import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class OvalButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      text:this.props.text,
      alpha:this.props.alpha,
    }
    this.funcHandler = this.props.onTapped;
  }
  componentWillReceiveProps(nextProps) {
    this.setState({alpha:nextProps.alpha})
  }
  render() {
    console.log(this.state.text)
    console.log(this.props.alpha)
    var opacity = parseFloat(this.state.alpha)
    return (
      <TouchableOpacity style={[styles.container,{backgroundColor:this.state.color, opacity: opacity}]} onPress={this.funcHandler}>
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
