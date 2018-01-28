import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AppRegistry, Image} from 'react-native';

export default class VideoCall extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
     <View style={styles.container}>
       <TouchableOpacity style={styles.bigbutton} onPress={this.props.onTapped}>
        <Image
          style={styles.button}
          source={require('./myButton.png')}

        />
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    right: 10
  },
  button: {
    alignItems: 'center',
    borderRadius: 50,
    width: 75,
    height: 75,
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  bigbutton: {
    height:80,
    width:85,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#D3D3D3',
    borderRadius: 75
  }
});