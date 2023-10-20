import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION_NAME} from '../Appdata/NavigationName';
import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Menu from '../Screens/Menu';
import OTP from '../Screens/Otp';
import Report from '../Screens/Report';
import PaperTrading from '../Screens/PaperTrading';
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
      <Screen
        name={NAVIGATION_NAME.REGISTER}
        component={Register}
        options={{headerShown: false}}
      />
      <Screen
        name={NAVIGATION_NAME.MENU}
        component={Menu}
        options={{headerShown: false}}
      />
      <Screen
        name={NAVIGATION_NAME.OTP}
        component={OTP}
        options={{headerShown: false}}
      />
      <Screen
        name={NAVIGATION_NAME.REPORT}
        component={Report}
        options={{headerShown: false}}
      />
      <Screen
        name={NAVIGATION_NAME.PAPERTRADING}
        component={PaperTrading}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}
