import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/Navigation/BottomNavigation';

import {configStore} from './src/Redux/configureStore';
import {Provider} from 'react-redux';

const {store} = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
   </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
