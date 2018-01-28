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
    return (
      <View style={styles.container}>
        <OvalButton text='Internal' color='#e67e22' onTapped={this.internalTapped}/>
        <OvalButton text='External' color='#f1c40f'onTapped={this.externalTapped}/>
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
