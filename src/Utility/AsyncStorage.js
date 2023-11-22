/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
export const EMAIL = 'EMAIL';
export const TOKEN = 'TOKEN';
export const USERTYPE = 'USERTYPE';
export const APPINTRO = 'APPINTRO';
export const SIGNUP = 'SIGNUP';
export const USERDETAIL = 'USERDETAIL';
export const UID = 'UID';
export const DATE = 'DATE';
export const CUSTOMERID = 'CUSTOMERID';
export const USERID = 'USERID';
export const PASSWORD = 'PASSWORD';
export const USERNAME = 'USERNAME';
export const USERDATA = 'USERDATA';
// Method for set the item on storage
export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('setItem', error);
  }
};

// Method for get the Item on storage
export const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    console.log('getItem', error);
  }
};

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    console.log('removeItem', error);
    return false;
  }
};
