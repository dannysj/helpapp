import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraExample extends React.Component {
  constructor(props) {
    super(props)
    this._exitButtonOnTap = this._exitButtonOnTap.bind(this)
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _exitButtonOnTap() {
    this.props.navigator.pop();
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>

              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={style.flipButton}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.xButtonCircle
                } onPress={this._exitButtonOnTap}>
                  <Text
                  style={style.xButton}>
                  X
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const style = StyleSheet.create({
  flipButton:{
    right: -30,
    bottom: 30,
    fontSize: 23,
    marginBottom: 10,
    color: 'white' },
  xButtonCircle:{

    position: 'absolute',
    top: 20,
    width: 40,
    height: 40,
    left: 20,
    borderColor: "#FFF",
    borderWidth: 3,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  xButton:{
    fontSize: 25,
    color: 'white',

  },

});
