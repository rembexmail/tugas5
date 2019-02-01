//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Selamat datang di aplikasi saya</Text>
                <Text>kami dari kelompok A</Text>
                <Text>VIRNANDA DWITA (16053017)</Text>
                <Text>HADI ISMAIL(16053009)</Text>
                
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
export default HomeScreen;