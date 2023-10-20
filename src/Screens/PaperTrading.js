import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {Themes} from '../Appdata/colors';
const PaperTrading = () => {
  return (
    <View style={styles.container}>
      {/* <Text>PaperTrading</Text> */}
      {/* Header View */}
      <View style={styles.headerIconView}>
        <View>
          <Text style={styles.titleWord}>R</Text>
        </View>
        <View style={styles.headerIconSubView}>
          <FontAwesome5 style={styles.iconsView} name="users" />
          <Entypo style={styles.iconsView} name="compass" />
          <Entypo style={styles.iconsView} name="dots-three-vertical" />
        </View>
      </View>
      {/* Header View  end*/}
    </View>
  );
};
export default PaperTrading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  headerIconSubView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleWord: {
    fontSize: 30,
    backgroundColor: Themes.AppTheme.darkgrey,
    textAlign: 'center',
    color: Themes.AppTheme.textColor,
    width: 40,
    height: 40,
    alignItems: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    borderRadius: 50,
    marginRight: 10,
  },
  iconsView: {
    fontSize: 20,
    backgroundColor: Themes.AppTheme.darkgrey,
    textAlign: 'center',
    color: Themes.AppTheme.textColor,
    width: 40,
    height: 40,
    alignItems: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    borderRadius: 50,
    marginRight: 10,
  },
});
