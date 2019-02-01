//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Nama : Virnanda Dwita</Text>
                <Text>NPM : 16053017</Text>
                <Text>TEKNOLOGI INFORMASI</Text>
                <Text>SEMESTER 5</Text>
                <Text>Kelas Malam</Text>
                <Text>=====================</Text>
                <Text>Nama : Hadi Ismail</Text>
                <Text>NPM : 16053009</Text>
                <Text>TEKNOLOGI INFORMASI</Text>
                <Text>SEMESTER 5</Text>
                <Text>Kelas Malam</Text>
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
export default Profile;