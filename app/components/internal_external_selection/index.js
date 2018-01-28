import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OvalButton from '../OvalButton';

export default class Internal_External_Selection extends React.Component {
  constructor(props) {
    super(props);
    this.externalTapped = this.externalTapped.bind(this);
    this.internalTapped = this.internalTapped.bind(this);
    this.state = {
      internal:false,
      external:false,
    }
  }

  externalTapped() {
    this.setState({internal:false, external:true})
  }

  internalTapped() {
    this.setState({internal:true,external:false})
  }

  render() {
    var internalAlpha = 1.0;
    var externalAlpha = 1.0;
    if (!this.state.internal) {
      internalAlpha = 0.3
    }
    if (!this.state.external) {
      externalAlpha = 0.3
    }
    return (
      <View style={styles.container}>
        <OvalButton text='Internal' color='#e67e22' alpha = {internalAlpha} onTapped={this.internalTapped}/>
        <OvalButton text='External' color='#f1c40f'alpha={externalAlpha} onTapped={this.externalTapped}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1/4,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 100,
    width: '100%',
  },
});
