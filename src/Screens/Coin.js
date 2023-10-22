import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CoinDummyData} from '../Componets/AppData';
import BottomNav from '../Componets/BottomNav';
import {Themes} from '../Appdata/colors';
const Coin = () => {
  const renderItem = ({item}) => {
    console.log(item, 'itemitemitem');
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

        <View>
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
        {/* <Text>Coin</Text> */}

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
            <Text>LTP</Text>
            <Text>
              <FontAwesome name="rupee" style={styles.closeIcon} />
              Change
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
