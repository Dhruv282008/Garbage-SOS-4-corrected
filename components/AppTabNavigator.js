import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BuzzerScreen from '../screens/BuzzerScreen';
import ComplaintScreen from '../screens/ComplaintScreen'

export const AppTabNavigator = createBottomTabNavigator({
  ComplaintScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/truck.png")} style={{width:30, height:30}}/>,
      tabBarLabel : "Raise a Complaint",
    }
  },
  BuzzerScreen: {
    screen: BuzzerScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/buzzer.png")} style={{width:60, height:60}}/>,
      tabBarLabel : "SOS",
    }
  }
});
