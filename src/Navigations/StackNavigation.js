import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION_NAME} from '../Appdata/NavigationName';
import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Menu from '../Screens/Menu';
import OTP from '../Screens/Otp';
import Report from '../Screens/Report';
import PaperTrading from '../Screens/PaperTrading';
import CoinDetails from '../Screens/CoinDetails';
import Coin from '../Screens/Coin';
import ForgotPassword from '../Screens/ForgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ResetPassword from '../Screens/ResetPassword';
import {USERDATA} from '../Utility/AsyncStorage';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
export default function StackNavigation() {
  const nav = useNavigation();
  const [state, setState] = useState({
    intialScreen: NAVIGATION_NAME.LOGIN,
    toRender: false,
  });

  const {Screen, Navigator} = createNativeStackNavigator();

  const getUserData = async () => {
    let userdata = JSON.parse(await AsyncStorage.getItem(USERDATA));
    console.log(userdata, 'userdata');
    if (userdata !== null) {
      setState({...state, intialScreen: NAVIGATION_NAME.MENU, toRender: true});
    } else {
      setState({...state, intialScreen: NAVIGATION_NAME.LOGIN, toRender: true});
      console.log(state, 'statestate');
      // setState({
      //   toRender: true,
      //   intialScreen: NAVIGATION_NAME.LOGIN,
      // });
      // setState({...state, intialScreen: NAVIGATION_NAME.LOGIN, toRender: true});
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  // getUserData();
  if (state.toRender) {
    return (
      <Navigator initialRouteName={state.intialScreen}>
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
        <Screen
          name={NAVIGATION_NAME.COINDETAILS}
          component={CoinDetails}
          options={{headerShown: false}}
        />
        <Screen
          name={NAVIGATION_NAME.COINS}
          component={Coin}
          options={{headerShown: false}}
        />
        <Screen
          name={NAVIGATION_NAME.FORGOTPASSWORD}
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Screen
          name={NAVIGATION_NAME.RESETPASSWORD}
          component={ResetPassword}
          options={{headerShown: false}}
        />
      </Navigator>
    );
  } else {
    return null;
  }
}
