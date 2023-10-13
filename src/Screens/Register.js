import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Themes} from '../Appdata/colors';
import CheckBox from 'react-native-check-box';
import {SignUpButton} from '../Componets/Button';
import {NAVIGATION_NAME} from '../Appdata/NavigationName';

export default function Register({navigation}) {
  return (
    <ImageBackground
      source={require('../Assets/Images/bgimg.jpg')}
      style={styles.container}>
      <Image source={require('../Assets/Images/logo.png')} style={styles.img} />
      <Text style={styles.title}>register</Text>
      <Text style={styles.subtitle}>You and Your Friends always Connected</Text>
      <View style={styles.formView}>
        <View style={styles.formSubView}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.myInput} placeholder="username@gmail.com" />
        </View>
        <View style={styles.formSubView}>
          <Text style={styles.label}>Contact Number:</Text>
          <TextInput style={styles.myInput} placeholder="**********" />
        </View>
        <View style={styles.formSubView}>
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.myInput} placeholder="**********" />
        </View>
        <View style={styles.formSubView}>
          <Text style={styles.label}>Confime Password:</Text>
          <TextInput style={styles.myInput} placeholder="**********" />
        </View>
      </View>
      <View style={styles.tramsView}>
        <CheckBox />
        <Text style={styles.tramsxtx}>
          I agree with the treams and condition and the privcy policy
        </Text>
      </View>
      <SignUpButton
        title={'SIGN UP'}
        style={styles.signUpButton}
        textstyle={styles.txtstyle}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(NAVIGATION_NAME.LOGIN)}>
        <Text style={styles.alreayTxt}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: Themes.AppTheme.button,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
  formView: {
    alignSelf: 'center',
    width: '70%',
    marginTop: 20,
  },
  label: {
    color: '#000',
    fontSize: 16,
  },
  myInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  formSubView: {
    marginBottom: 10,
  },
  tramsView: {
    flexDirection: 'row',
    marginHorizontal: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  tramsxtx: {
    width: 200,
    marginLeft: '5%',
  },
  signUpButton: {
    backgroundColor: 'red',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20,
  },
  txtstyle: {
    color: '#fff',
  },
  alreayTxt: {
    color: 'grey',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
});
