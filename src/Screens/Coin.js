import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CoinDummyData} from '../Componets/AppData';
import BottomNav from '../Componets/BottomNav';
import {Themes} from '../Appdata/colors';
import Feather from 'react-native-vector-icons/Feather';
import {Container, Header, Left, Body, Right, Button, Title} from 'native-base';
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

        <View
          style={{
            backgroundColor: Themes.AppTheme.grey,
            width: 100,
            height: 58,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            height: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 2,
            borderBottomColor: Themes.AppTheme.darkgrey,
          }}>
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
        {/* Header View End*/}

        {/* List View */}
        <View style={styles.listHeader}>
          <View>
            <Text>Ol</Text>
            <Text>(%Chng.)</Text>
          </View>
          <View>
            <Text>LTP</Text>
            <Text>
              <FontAwesome name="rupee" style={styles.closeIcon} />
              Change
            </Text>
          </View>

          <View>
            <Text style={styles.middleText}>Strike</Text>
          </View>
          <View>
            <Text>LTP</Text>
            <Text>
              <FontAwesome name="rupee" style={styles.closeIcon} />
              Change
            </Text>
          </View>
          <View>
            <Text>Oi</Text>
            <Text>
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
});
