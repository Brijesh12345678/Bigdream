import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {Themes} from './src/Appdata/colors';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigations/StackNavigation';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor={Themes.AppTheme.statusBar} />
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
}
