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
import {ChangePasswordRequest} from '../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../Componets/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN, USERDATA} from '../Utility/AsyncStorage';
export default function ResetPassword({navigation}) {
  const {ChangePasswordData, loading} = useSelector(state => state.app);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    password: null,
    confirmPassword: null,
  });

  const submit = () => {
    if (data.password === '') {
      alert('Please Enter Your password');
    } else if (data.confirmPassword === '') {
      alert('Please Enter Your Confirm Password');
    } else if (data.password != data.confirmPassword) {
      alert('Please Enter Corrct Confirm Password');
    } else {
      let row = {
        resetToken: ChangePasswordData?.response?.data?.data?.user?.resetToken,
        newPassword: data.password,
      };
      dispatch(ChangePasswordRequest(JSON.stringify(row)));
    }
  };
  const isSuccess = async () => {
    if (ChangePasswordData?.response) {
      if (ChangePasswordData?.response.statusCode == 200) {
        alert('Success');
        navigation.navigate(NAVIGATION_NAME.LOGIN);
      } else {
        alert('Error');
      }
    }
  };
  console.log(
    ChangePasswordData?.response?.data?.data?.user?.resetToken,
    'ChangePasswordDataChangePasswordData',
  );
  useEffect(() => {
    isSuccess();
  }, [ChangePasswordData]);
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
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>Happy to see you again!</Text>
        <View style={styles.formView}>
          <View style={styles.formSubView}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
              onChangeText={e => setData({...data, password: e})}
              style={styles.myInput}
              placeholder="Password"
              placeholderTextColor={Themes.AppTheme.black}
            />
          </View>
          <View style={styles.formSubView}>
            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
              onChangeText={e => setData({...data, confirmPassword: e})}
              style={styles.myInput}
              placeholder="Confirm Password"
              placeholderTextColor={Themes.AppTheme.black}
            />
          </View>
        </View>
        <SignUpButton
          title={'SUBMIT'}
          style={styles.signUpButton}
          textstyle={styles.txtstyle}
          onPress={() => submit()}
        />
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
    fontSize: 30,
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
