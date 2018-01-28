import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import ContactCard from '../components/ContactCard';
import Human from '../components/human';

export default class DetailBoard extends React.Component {
  constructor(props) {
    super(props)
    this._exitButtonOnTap = this._exitButtonOnTap.bind(this)
  }

  _exitButtonOnTap() {
    this.props.navigator.pop();
  }


  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.xButton} onPress={this._exitButtonOnTap}>
          <Text style={styles.buttonTitle}>x
        </Text>
      </TouchableOpacity>
        <Text style={styles.title}>Help is on the way!</Text>
        <Human />
        <ContactCard />
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
  title: {
    fontSize:23,
    top:50,
    zIndex: 5
  },
  xButton:{

    position: 'absolute',
    top: 20,
    width: 40,
    height: 40,
    left: 20,
    backgroundColor: '#EF5350',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 30,
    color: '#FFF',
  }

});
