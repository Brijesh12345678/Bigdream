import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Themes} from '../Appdata/colors';
import {SignUpButton} from '../Componets/Button';
import {NAVIGATION_NAME} from '../Appdata/NavigationName';
import {loginFailure, loginRequest} from '../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../Componets/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN, USERDATA} from '../Utility/AsyncStorage';
import Entypo from 'react-native-vector-icons/Entypo';
import {ToastAndroid} from 'react-native-windows';
export default function Login({navigation}) {
  const {loginData, loading} = useSelector(state => state.app);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      dispatch(loginRequest(JSON.stringify(row)));
    }
  };
  const isSuccess = async () => {
    if (loginData?.response) {
      if (loginData?.response.statusCode == 200) {
        ToastAndroid.showWithGravity(
          'You have login successfully',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        navigation.navigate(NAVIGATION_NAME.MENU);
        AsyncStorage.setItem(USERDATA, JSON.stringify(loginData.response.data));
        AsyncStorage.setItem(
          TOKEN,
          JSON.stringify(loginData.response.data.token),
        );
        dispatch(loginFailure());
      } else {
        alert('Somthing went wrong');
      }
    }
  };
  useEffect(() => {
    isSuccess();
    dispatch(loginFailure());
  }, [loginData]);
  return (
    <>
      <Loader check={loading} />
      <ImageBackground
        source={require('../Assets/Images/bgimg.jpg')}
        style={styles.container}>
        <Image
          source={require('../Assets/Images/logo.png')}
          style={styles.img}
        />
        <Text style={styles.title}>Login in!</Text>
        <Text style={styles.subtitle}>Happy to see you again!</Text>
        <View style={styles.formView}>
          <View style={styles.formSubView}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              onChangeText={e => setEmail(e)}
              style={styles.myInput}
              placeholder="username@gmail.com"
              placeholderTextColor={Themes.AppTheme.black}
            />
          </View>
          <View style={styles.formSubView}>
            <Text style={styles.label}>Password:</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
              }}>
              <TextInput
                secureTextEntry={!showPassword}
                onChangeText={e => setPassword(e)}
                style={{...styles.myInput, width: '100%'}}
                placeholder="**********"
                placeholderTextColor={Themes.AppTheme.black}
              />
              <TouchableOpacity
                style={styles.eyeiconButton}
                onPress={() => setShowPassword(!showPassword)}>
                <Entypo
                  name={showPassword ? 'eye' : 'eye-with-line'}
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION_NAME.FORGOTPASSWORD)}>
          <Text style={styles.alreayTxt}>Forget password ?</Text>
        </TouchableOpacity>
        <SignUpButton
          title={'SIGN IN'}
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
    </>
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
    color: Themes.AppTheme.black,
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
    color: Themes.AppTheme.black,
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
    marginVertical: 20,
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
  eyeIcon: {
    color: Themes.AppTheme.black,
    fontSize: 18,
  },
  eyeiconButton: {
    position: 'absolute',
    right: 10,
  },
});

// import {View} from 'native-base';
// import React, {useState} from 'react';
// import {Text, Button} from 'react-native';
// const App = () => {
//   let data = 100;
//   const fruit = val => {
//     data = 20;
//     console.warn(data);
//   };
//   return (
//     <View>
//       <Text style={{fontSize: 20}}>{data} </Text>
//       <Button title="On Press" onPress={() => fruit('Hello')} color={'green'} />
//     </View>
//   );
// };
// export default App;
