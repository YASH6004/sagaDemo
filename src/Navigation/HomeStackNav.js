import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Screen/Home';
import ProductDetails from '../Screen/ProductDetails';

const Stack = createStackNavigator();

const HomeStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        // options={{
        //   headerShown: false,
        // }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNav;
