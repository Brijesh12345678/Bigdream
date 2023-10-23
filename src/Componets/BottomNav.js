import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Themes} from '../Appdata/colors';
import {BottomNavTxt} from './AppData';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATION_NAME} from '../Appdata/NavigationName';
const BottomNav = () => {
  const navigation = useNavigation();
  const onPress = name => {
    if (name === 'Watchlist') {
      navigation.navigate(NAVIGATION_NAME.COINS);
    } else if (name === 'Chart') {
      navigation.navigate(NAVIGATION_NAME.COINS);
    } else if (name === 'Paper Trading') {
      navigation.navigate(NAVIGATION_NAME.PAPERTRADING);
    } else if (name === 'Reports') {
      navigation.navigate(NAVIGATION_NAME.REPORT);
    } else if (name === 'Menu') {
      navigation.navigate(NAVIGATION_NAME.MENU);
    }
  };

  return (
    <View style={style.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}>
        {BottomNavTxt?.map((val, index) => {
          return (
            <>
              <TouchableOpacity onPress={() => onPress(val.name)} key={index}>
                <Image
                  style={style.imgstyle}
                  source={val.img}
                  resizeMode="contain"
                />
                <Text>{val.name}</Text>
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </View>
  );
};
export default BottomNav;

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Themes.AppTheme.titleColor,
    height: 70,
  },
  imgstyle: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    tintColor: '#fff',
    marginTop: 10,
    marginBottom: 5,
  },
});
