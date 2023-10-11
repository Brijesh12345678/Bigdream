import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Button} from '../Componets/Button';
import {Themes} from '../Appdata/colors';
export default function Welcome() {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../Assets/Images/logo.png')}
          style={styles.img}
        />
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={styles.ButtonView}>
        <Button
          title={'SIGN IN'}
          disabled={false}
          style={styles.buttonstyle}
          textstyle={styles.txtstyle}
        />
        <Button
          title={'NEW ACCOUNT'}
          disabled={false}
          style={styles.buttonstyle}
          textstyle={styles.txtstyle}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonstyle: {
    width: '100%',
    height: 40,
    backgroundColor: Themes.AppTheme.button,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBlockColor: Themes.AppTheme.textColor,
  },
  txtstyle: {
    color: Themes.AppTheme.textColor,
  },
  ButtonView: {
    // flex: 9,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: Themes.AppTheme.button,
  },
});
