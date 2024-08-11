import React from 'react';
import {View} from 'react-native';
import NavigationBottom from '../NavigationBar/BottomNavigationBar';

const BottomNavbarLayout = ({children}: any) => {
  return (
    <View>
      <View>{children}</View>
      <NavigationBottom />
    </View>
  );
};

export default BottomNavbarLayout;
