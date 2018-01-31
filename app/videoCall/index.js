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
    right: 10,
    bottom: -250
  },
  button: {
    alignItems: 'center',
    borderRadius: 25,
    width: 50,
    height: 50,
    padding: 10,
    zIndex:5,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  bigbutton: {
    height:70,
    width:70,
    bottom: -15,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FF5252',
    borderRadius: 35
  }
});
