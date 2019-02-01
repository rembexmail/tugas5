//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,WebView } from 'react-native';

// create a component
class Sosmed extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <WebView
        source={{uri: 'https://web.facebook.com/hadi.brandals.3'}}
        
      />
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
export default Sosmed;