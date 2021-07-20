import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ComplaintScreen from '../screens/ComplaintScreen';
import BuzzerScreen from '../screens/BuzzerScreen';




export const AppStackNavigator = createStackNavigator({
  Complaint : {
    screen : ComplaintScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  BuzzerScreen : {
    screen : BuzzerScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'Complaint'
  }
);
