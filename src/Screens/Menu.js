import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Themes} from '../Appdata/colors';
import {NAVIGATION_NAME} from '../Appdata/NavigationName';
import BottomNav from '../Componets/BottomNav';

const Menu = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION_NAME.REPORT)}>
          <View style={styles.userNameView}>
            <Text style={styles.mainTxt}>Z</Text>
            <Text style={styles.usernametxt}>Zakirmohd547</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.settingNewsView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(NAVIGATION_NAME.PAPERTRADING)}
            style={styles.settingNewsSubView}>
            {/* <View> */}
            <Text style={styles.settingNewstxt}>Setting</Text>
            <Image
              source={require('../Assets/Images/settings.png')}
              style={styles.settingImg}
            />
            {/* </View> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingNewsSubView}
            onPress={() => navigation.navigate(NAVIGATION_NAME.COINDETAILS)}>
            <Text style={styles.settingNewstxt}>News</Text>
            <Image
              source={require('../Assets/Images/newspaper.png')}
              style={styles.settingImg}
            />
          </TouchableOpacity>
        </View>
        {/* list start */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../Assets/Images/credit_card.png')}
              style={styles.listIcon}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate(NAVIGATION_NAME.COINS)}>
              <Text style={{fontSize: 20, marginLeft: 20, color: 'black'}}>
                Subscription
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>{'>'}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../Assets/Images/person.png')}
              style={styles.listIcon}
            />
            <Text style={{fontSize: 20, marginLeft: 20, color: 'black'}}>
              Brokers
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>{'>'}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../Assets/Images/moon.png')}
              style={styles.listIcon}
            />
            <Text style={{fontSize: 20, marginLeft: 20, color: 'black'}}>
              Theme
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>{'>'}</Text>
          </View>
        </View>
        {/* list end */}
      </View>
      {/* Refer a friend */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../Assets/Images/exchange.png')}
            style={styles.listIcon}
          />
          <Text style={{fontSize: 20, marginLeft: 20, color: 'black'}}>
            Refer a Friend
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{'>'}</Text>
        </View>
      </View>
      {/* Refer a friend End*/}
      <BottomNav />
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  title: {
    fontSize: 28,
    color: Themes.AppTheme.titleColor,
    fontWeight: 'bold',
  },
  userNameView: {
    backgroundColor: Themes.AppTheme.grey,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    height: 100,
  },
  mainTxt: {
    fontSize: 30,
    backgroundColor: Themes.AppTheme.titleColor,
    textAlign: 'center',
    color: Themes.AppTheme.textColor,
    width: 40,
    height: 40,
    alignItems: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    borderRadius: 6,
    marginRight: 10,
  },
  usernametxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Themes.AppTheme.lightblack,
  },
  settingImg: {
    width: 50,
    height: 50,
  },
  settingNewsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingNewsSubView: {
    backgroundColor: Themes.AppTheme.grey,
    width: '48%',
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 80,
  },
  settingNewstxt: {
    fontSize: 20,
    color: 'black',
  },
  listIcon: {
    width: 30,
    height: 30,
    padding: 20,
  },
});
