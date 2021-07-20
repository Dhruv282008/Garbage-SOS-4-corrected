import React from 'react';

import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';

import CustomSideBarMenu  from './CustomSideBarMenu';
import ComplaintScreen from '../screens/ComplaintScreen';

import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppTabNavigator,
    navigationOptions: {
      drawerIcon: <Icon name="home" type="fontawesome5" />
    }
  },
  Complaints: {
    screen: ComplaintScreen,
    navigationOptions: {
      drawerIcon: <Icon name="gift" type="font-awesome" />,
      drawerLabel: "My Complaints"
    }
  },
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName: 'Home'
  });