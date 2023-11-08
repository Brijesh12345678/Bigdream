import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CoinDummyData} from '../Componets/AppData';
import BottomNav from '../Componets/BottomNav';
import {Themes} from '../Appdata/colors';
import Feather from 'react-native-vector-icons/Feather';
import {Container, Header, Left, Body, Right, Button, Title} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Coin = () => {
  const renderItem = ({item}) => {
    // console.log(item, 'itemitemitem');
    return (
      <View style={styles.listData}>
        <View>
          <Text style={styles.textColor}>{item.changLkLeft}</Text>
          <Text style={{color: Themes.AppTheme.lightgreen}}>1.31%</Text>
        </View>
        <View>
          <Text style={styles.textColor}>{item.changLTPLeft}</Text>
          <Text style={{color: Themes.AppTheme.red}}>-65.20</Text>
        </View>

        <View style={styles.view1}>
          <Text
            style={{
              ...styles.middleText,
              fontWeight: '500',
              fontSize: 16,
              color: '#000',
            }}>
            {item.Stike}
          </Text>
        </View>
        <View>
          <Text style={styles.textColor}>{item.changLTPRight}</Text>
          <Text style={{color: Themes.AppTheme.lightgreen}}>+36.60</Text>
        </View>
        <View>
          <Text style={styles.textColor}>{item.changLkRight}</Text>
          <Text style={{color: Themes.AppTheme.lightgreen}}>0.21%</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={{flex: 1}}>
        {/* Header View*/}
        <View style={styles.headermainView}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              width: '70%',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Feather
                name="arrow-left"
                style={{fontSize: 25, color: '#000'}}
              />
            </TouchableOpacity>
            <Body>
              <Title style={{fontSize: 20, color: '#000'}}>OPTION CHAIN</Title>
            </Body>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Feather
              name="bell"
              style={{fontSize: 25, color: '#000', marginRight: 10}}
            />
            <Feather name="info" style={{fontSize: 25, color: '#000'}} />
          </View>
        </View>
        <View style={styles.searchView}>
          <View style={styles.SubSearchView}>
            <AntDesign name="search1" style={styles.searchIcon} />
            <TextInput
              placeholder="NIFTY"
              placeholderTextColor={'#000'}
              style={styles.NIFTYInput}
            />
          </View>
          <View style={styles.SubSearchView}>
            <Text style={styles.niftyTxt}>
              19547.70 <Text style={styles.niftysubTxt}>-105.80</Text>
            </Text>
          </View>
        </View>
        {/* Header View End*/}

        {/* List View */}
        <View style={styles.listHeader}>
          <View>
            <Text style={styles.headerlistText}>Ol</Text>
            <Text style={styles.headerlistText}>(%Chng.)</Text>
          </View>
          <View>
            <Text style={styles.headerlistText}>LTP</Text>
            <Text style={styles.headerlistText}>
              <FontAwesome name="rupee" style={styles.closeIcon} />
              Change
            </Text>
          </View>

          <View>
            <Text style={styles.middleText}>Strike</Text>
          </View>
          <View>
            <Text style={styles.headerlistText}>LTP</Text>
            <Text style={styles.headerlistText}>
              <FontAwesome name="rupee" style={styles.closeIcon} />
              Change
            </Text>
          </View>
          <View>
            <Text style={styles.headerlistText}>Oi</Text>
            <Text style={styles.headerlistText}>
              <FontAwesome name="rupee" style={styles.closeIcon} />
              (%Chng)
            </Text>
          </View>
        </View>
        <FlatList data={CoinDummyData} renderItem={renderItem} />
        {/* List View END */}
      </View>
      <BottomNav />
    </>
  );
};
export default Coin;

const styles = StyleSheet.create({
  listHeader: {
    width: '100%',
    height: 60,
    backgroundColor: '#6c7093',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  middleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listData: {
    width: '100%',
    height: 60,
    // backgroundColor: '#6c7093',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBlockColor: '#fff',
  },
  textColor: {
    color: '#000',
  },
  searchView: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    width: '94%',
    // backgroundColor: 'red',
  },
  searchIcon: {color: 'grey', fontSize: 20},
  NIFTYInput: {
    borderBottomWidth: 1,
    width: '90%',
    borderBottomColor: 'grey',
  },
  SubSearchView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  headerlistText: {
    color: '#fff',
  },
  niftyTxt: {
    color: 'black',
    fontSize: 18,
  },
  niftysubTxt: {
    color: 'red',
    fontSize: 12,
  },
  view1: {
    backgroundColor: Themes.AppTheme.grey,
    width: 100,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headermainView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: Themes.AppTheme.darkgrey,
  },
});
