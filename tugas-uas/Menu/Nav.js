import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Home';
import ProfileScreen from './Profile';
import RiwayatScreen from './Riwayat';
import SosmedScreen from './Sosmed';
import MapScreen from './Map_Rumah';

const Stack1 = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: (
        <View style={{ paddingLeft: 21 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={27} />
          </TouchableOpacity>
        </View>
      ),
    }),
  }
});

const Stack2 = StackNavigator({
  Profile: {
    screen: ProfileScreen ,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: (
        <View style={{ paddingLeft: 21 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={27} />
          </TouchableOpacity>
        </View>
      ),
    }),
  }
});

const Stack3 = StackNavigator({
  Riwayat: {
    screen: RiwayatScreen ,
    navigationOptions: ({ navigation }) => ({
      title: 'Riwayat',
      headerLeft: (
        <View style={{ paddingLeft: 21 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={27} />
          </TouchableOpacity>
        </View>
      ),
    }),
  }
});


const Stack4 = StackNavigator({
  Sosmed: {
    screen: SosmedScreen ,
    navigationOptions: ({ navigation }) => ({
      title: 'Sosmed',
      headerLeft: (
        <View style={{ paddingLeft: 21 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={27} />
          </TouchableOpacity>
        </View>
      ),
    }),
  }
});


const Stack5 = StackNavigator({
  Map_Rumah: {
    screen: MapScreen ,
    navigationOptions: ({ navigation }) => ({
      title: 'Map Rumah',
      headerLeft: (
        <View style={{ paddingLeft: 21 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={27} />
          </TouchableOpacity>
        </View>
      ),
    }),
  }
});

export default DrawerNavigator({
  Home: {
    screen: Stack1,
  },
  Profile: {
    screen: Stack2,
  },
  Riwayat: {
    screen: Stack3,
  },
  Sosmed: {
    screen: Stack4,
  },
  Map_Rumah: {
    screen: Stack5,
  },
});