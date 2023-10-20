import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import {Themes} from '../Appdata/colors';
import {SignUpButton} from '../Componets/Button';
import {NAVIGATION_NAME} from '../Appdata/NavigationName';

const OTP = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.otptitle}>ENTER OTP</Text>
      <Image
        source={require('../Assets/Images/accept.png')}
        style={styles.img}
      />
      <OTPTextView
        containerStyle={{marginBottom: 20}}
        inputCount={4}
        keyboardType="numeric"
      />
      <SignUpButton
        onPress={() => navigation.navigate(NAVIGATION_NAME.MENU)}
        title={'SUBMIT'}
        style={styles.signUpButton}
        textstyle={styles.txtstyle}
      />
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
  otptitle: {
    fontSize: 30,
    marginTop: '10%',
    marginBottom: '10%',
    fontWeight: 'bold',
    color: Themes.AppTheme.titleColor,
  },
  signUpButton: {
    backgroundColor: 'red',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 20,
  },
  txtstyle: {
    color: '#fff',
  },
});
