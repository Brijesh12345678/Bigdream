import React, {useState} from 'react';
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

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    console.log(email, password);
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
