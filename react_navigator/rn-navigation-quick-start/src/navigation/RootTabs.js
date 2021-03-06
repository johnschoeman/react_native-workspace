import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
    <Text>HomeScreen</Text>
  </View>
)

const ProfilesScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
    <Text>Profiles</Text>
  </View>
)

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => {
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      }
    }
  },
  Profiles: {
    screen: ProfilesScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => {
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      }
    }
  },
});

export default RootTabs;