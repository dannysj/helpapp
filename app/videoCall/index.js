import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AppRegistry, Image} from 'react-native';

export default class videoCall extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.onPress = () => {
    this.setState({
      count: this.state.count+1
    })
    }
  }

  render() {
    return (
     <View style={styles.container}>
       <TouchableOpacity style={styles.bigbutton} onPress={this.onPress}>
        <Image
          style={styles.button}
          source={require('./myButton.png')}
         
        />
       </TouchableOpacity>

       <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    borderRadius: 50,
    width: 100,
    height: 100,
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
    height:150, 
    width:150, 
    alignItems:'center', 
    justifyContent:'center', 
    backgroundColor:'#D3D3D3',
    borderRadius: 75
  }
});