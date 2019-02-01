//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView } from 'expo';
// create a component
class Map_Rumah extends Component {
state = {
    location: {coords: { latitude: -7.243747, longitude: 112.632412}},
  };
    render() {
        return (
            <View style={{flex:1}}>
                <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -7.243747,
          longitude: 112.632412,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034,
        }}
      >
      <MapView.Marker
      coordinate={this.state.location.coords}
      title="Rumah saya"
      description=""
    />
        </MapView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Map_Rumah;