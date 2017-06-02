import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import UserProfileComponentScreen from './UserProfileComponentScreen';

const MainApp = StackNavigator({
  UserProfileComponent: {screen: UserProfileComponentScreen}
});
export default MainApp;