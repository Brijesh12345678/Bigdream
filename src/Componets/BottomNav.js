import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Themes} from '../Appdata/colors';
import {BottomNavTxt} from './AppData';

const BottomNav = () => {
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
              <TouchableOpacity key={index}>
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
