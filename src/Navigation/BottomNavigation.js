import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackNav from './HomeStackNav';
import Cart from '../Screen/Cart';


const BottomNavigation = () => {
 
  const Tab = createBottomTabNavigator();
  let cartVal= 1
  return (
    <Tab.Navigator
      //  initialRouteName={HomeStackNav}
      screenOptions={{
        tabBarActiveTintColor: '#53B175',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight:'600'
      },
      }}
      >
      <Tab.Screen
        name="HomeStackNav"
        component={HomeStackNav}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../Assets/storeA.png')
                  : require('../Assets/store.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge:cartVal,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../Assets/cartA.png')
                  : require('../Assets/cart.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
