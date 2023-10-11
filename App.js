import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {Themes} from './src/Appdata/colors';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigations/StackNavigation';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={Themes.AppTheme.statusBar} />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
}
