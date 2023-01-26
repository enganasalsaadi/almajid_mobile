import {useContext, useEffect} from 'react';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NAVIGATION_HOME_SCREEN,
  NAVIGATION_AUTH_SCREEN,
  NAVIGATION_WISH_LIST_SCREEN,
} from './types';
import HomeScreen from '../screens/HomeScreen';

import AuthScreen from '../screens/AuthScreen';
import WhislistScreen from '../screens/WhislistScreen';
import {AuthContext} from '../context/AuthContext';
import { useIsConnected } from 'react-native-offline';

const AppStack = createStackNavigator();
const Stack = createStackNavigator();
const AppNavigator = () => {
  const isConnected = useIsConnected();
  console.log("Internet connection: "+isConnected);
  const {setUserData, ifLogged} = useContext(AuthContext);

  useEffect(() => {
    setUserData();
  }, []);

  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!ifLogged() && (
        <Stack.Screen name={NAVIGATION_AUTH_SCREEN} component={AuthScreen} />
      )}

      <Stack.Screen name={NAVIGATION_HOME_SCREEN} component={HomeScreen} />

      <Stack.Screen
        name={NAVIGATION_WISH_LIST_SCREEN}
        component={WhislistScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
