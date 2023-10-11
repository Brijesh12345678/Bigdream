import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION_NAME} from '../Appdata/NavigationName';
import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
export default function StackNavigation() {
  const {Screen, Navigator} = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen
        name={NAVIGATION_NAME.WELCOME}
        component={Welcome}
        options={{headerShown: false}}
      />
      <Screen
        name={NAVIGATION_NAME.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}
