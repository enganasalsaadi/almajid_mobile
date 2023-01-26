/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';

import {LogBox} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './navigation';
import {Provider} from 'react-redux';
import store from './store';
import './localization/i18n';
import {navigationRef} from './navigation/NavigationService';
import AuthProvider from './context/AuthContext';
import ProductProvider from './context/ProductContext';
import AppProvider from './context/AppContext';
import {ReduxNetworkProvider} from 'react-native-offline';
import {NetworkProvider} from 'react-native-offline';

LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <Provider store={store}>
      <ReduxNetworkProvider>
        <NetworkProvider>
          <SafeAreaProvider>
              <AuthProvider>
            <AppProvider>
                <ProductProvider>
                  <NavigationContainer ref={navigationRef as any}>
                    <AppNavigator />
                  </NavigationContainer>
                </ProductProvider>
            </AppProvider>
              </AuthProvider>
          </SafeAreaProvider>
        </NetworkProvider>
      </ReduxNetworkProvider>
    </Provider>
  );
};

export default App;
