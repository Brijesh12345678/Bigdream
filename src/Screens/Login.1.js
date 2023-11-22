import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SignUpButton} from '../Componets/Button';
import {NAVIGATION_NAME} from '../Appdata/NavigationName';
import {loginRequest} from '../Redux/actions';
import {styles} from './Login';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    if (email === '') {
      alert('Please Enter Your Email');
    } else if (password === '') {
      alert('Please Enter Your Password');
    } else {
      let row = {
        email: email,
        password: password,
      };

      loginRequest;
    }
  };

  return (
    <ImageBackground
      source={require('../Assets/Images/bgimg.jpg')}
      style={styles.container}>
      <Image source={require('../Assets/Images/logo.png')} style={styles.img} />
      <Text style={styles.title}>Login in!</Text>
      <Text style={styles.subtitle}>Happy to see you again!</Text>
      <View style={styles.formView}>
        <View style={styles.formSubView}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            onChangeText={e => setEmail(e)}
            style={styles.myInput}
            placeholder="username@gmail.com"
          />
        </View>
        <View style={styles.formSubView}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={e => setPassword(e)}
            style={styles.myInput}
            placeholder="**********"
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(NAVIGATION_NAME.OTP)}>
        <Text style={styles.alreayTxt}>Forget password ?</Text>
      </TouchableOpacity>
      <SignUpButton
        title={'SIGN UP'}
        style={styles.signUpButton}
        textstyle={styles.txtstyle}
        onPress={() => submit()}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(NAVIGATION_NAME.REGISTER)}>
        <Text style={styles.alreayTxt}>
          Don't have an account? Sign up here
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
