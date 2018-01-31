import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import CameraExample from '../camera';
import VideoCall from '../videoCall';
import BeaconDashboard from '../components/BeaconDashboard';
import Animation from 'lottie-react-native';
import DetailBoard from '../detailBoard';

import radar from '../assets/radar_scanning.json';

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width/height
const LATITUDE_DELTA = 0.0018
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class BeaconPage extends React.Component {
  constructor(props) {
    super(props)
    this._handleVideoPress = this._handleVideoPress.bind(this)
    this.gotoDetailBoard = this.gotoDetailBoard.bind(this)

      this._exitButtonOnTap = this._exitButtonOnTap.bind(this)


    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      },
      marker2Position: {
        latitude: 44.97285530892421,
        longitude: -93.2348245382309
      },
      distance: 0
    }

    this.calDis = function distance(lat1, lon1, lat2, lon2, unit) {
      var radlat1 = Math.PI * lat1/180
      var radlat2 = Math.PI * lat2/180
      var theta = lon1-lon2
      var radtheta = Math.PI * theta/180
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      dist = Math.acos(dist)
      dist = dist * 180/Math.PI
      dist = dist * 60 * 1.1515
      if (unit=="K") { dist = dist * 1.609344 }
      if (unit=="N") { dist = dist * 0.8684 }
      return dist
    }
  }


_exitButtonOnTap() {
  this.props.navigator.pop();
}

  _handleVideoPress() {
    console.log("Video")
    const nextRoute = {
      component: CameraExample,
      title: 'Camera',
      passProps: {myProp: 'bar'},
      navigationBarHidden: true
    };
    this.props.navigator.push(nextRoute);
  }

  watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({initialPosition: initialRegion})
      this.setState({markerPosition: initialRegion})

      var dist = this.calDis(lat, long, this.state.marker2Position.latitude, this.state.marker2Position.longitude, 'K')
      this.setState({distance: dist.toFixed(2)})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var lastRegion = {
        latitude: lat,
        longitude: long,
        longitudeDelta: LONGITUDE_DELTA,
        latitudeDelta: LATITUDE_DELTA
      }

      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  gotoDetailBoard() {
    const nextRoute = {
      component: DetailBoard,
      title: 'Beacon Page',
      passProps: { myProp: 'bar'},
      navigationBarHidden: true
    };
    this.props.navigator.push(nextRoute);
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.xButton} onPress={this._exitButtonOnTap}>
          <Text style={styles.buttonTitle}>x
        </Text>
      </TouchableOpacity>
        <MapView style={styles.map}
          region={this.state.initialPosition}>

            <MapView.Marker
              coordinate={this.state.markerPosition}>
                <View style={styles.radius}>
                  <View style={styles.marker} />
                </View>

            </MapView.Marker>

            <MapView.Marker
              coordinate={this.state.marker2Position}>
                <View style={styles.radius}>
                  <View style={styles.marker2} />
                </View>
            </MapView.Marker>
            <TouchableOpacity style={styles.bigbutton} onPress={this.gotoDetailBoard}>
            <Text style={styles.buttonTitle}>→</Text>
            </TouchableOpacity>
          </MapView>
          <View style={styles.dashboard}>
            <BeaconDashboard />
          </View>
          <Text style={styles.label}>{this.state.distance} KM AWAY</Text>
          <VideoCall onTapped={this._handleVideoPress} style={styles.video}> </VideoCall>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    position: 'absolute',
    alignItems: 'center',
        width: '100%',
  },
  marker:{
    height: 20,
    width: 20,
    borderRadius: 3,
    borderColor: 'white',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },
  marker2:{
    height: 20,
    width: 20,
    borderRadius: 3,
    borderColor: 'white',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#FF0000'
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    height: 350,
    position: 'absolute'
  },
  text: {
    fontSize: 20,
    position: 'relative',
    top: 60
  },
  label: {
    fontSize: 15,
    position: 'relative',
    top: 60
  },
  dashboard: {
    width: '100%',
    top: 350,
    height: 300
  },
  anim: {

    width:80,
    height: 80
  },
  bigbutton: {
    height:60,
    width:60,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 15,
    top: 15,
    backgroundColor:'#00E676',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
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
    zIndex: 15
  },
  buttonTitle: {
    fontSize: 30,
    color: '#FFF',
    zIndex: 17
  }
});
