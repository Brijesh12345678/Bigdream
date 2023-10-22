import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {Themes} from '../Appdata/colors';
import {TabView, SceneMap} from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Watchlist = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;
const Positions = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 20, marginTop: 20}}>
      <View style={styles.mainView}>
        <View>
          <Text style={styles.PositionsLeftSideAmount}>
            <FontAwesome5 name="rupee-sign" color="black" />
            11,11,928.00
          </Text>
          <Text style={{color: '#000'}}>
            Total Portfolio{' '}
            <AntDesign name="exclamationcircleo" styl={{marginLef: 20}} />
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...styles.PositionsLeftSideAmount,
              color: Themes.AppTheme.lightgreen,
            }}>
            <FontAwesome5
              name="rupee-sign"
              color={Themes.AppTheme.lightgreen}
            />
            75.00
          </Text>
          <Text style={{color: '#000'}}>Positions P&L </Text>
        </View>
      </View>

      {/* Second View */}
      <View style={styles.secondView}>
        <View>
          <Text
            style={{
              ...styles.PositionsLeftSideAmount,
              fontSize: 18,
              color: Themes.AppTheme.textColor,
            }}>
            Available Margin
          </Text>
          <Text
            style={{
              ...styles.PositionsLeftSideAmount,
              fontSize: 18,
              color: Themes.AppTheme.textColor,
            }}>
            Invested Margin
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...styles.PositionsLeftSideAmount,
              color: Themes.AppTheme.textColor,
            }}>
            <FontAwesome5 name="rupee-sign" color={Themes.AppTheme.textColor} />
            11,02,323.00
          </Text>
          <Text
            style={{
              ...styles.PositionsLeftSideAmount,
              color: Themes.AppTheme.textColor,
            }}>
            <FontAwesome5 name="rupee-sign" color={Themes.AppTheme.textColor} />
            9,530.00
          </Text>
        </View>
      </View>
      {/* Second View End */}
      {/* Third View  */}
      <Text style={styles.subTitle}>Positions</Text>

      <View style={styles.mainView}>
        <View>
          <Text style={{...styles.PositionsLeftSideAmount, fontSize: 18}}>
            NIFTY 120CT23 19600 PE
          </Text>
          <Text style={{color: '#000'}}>100 QTy (B),Active </Text>
          <Text style={{color: '#000'}}>
            Invested:{' '}
            <FontAwesome5 name="rupee-sign" color={Themes.AppTheme.black} />
            9,530.00
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...styles.PositionsLeftSideAmount,
              color: Themes.AppTheme.lightgreen,
              textAlign: 'right',
              marginRight: 20,
            }}>
            <FontAwesome5
              name="rupee-sign"
              color={Themes.AppTheme.lightgreen}
            />
            75.00
          </Text>
          <Text
            style={{
              color: Themes.AppTheme.lightgreen,
              textAlign: 'right',
              marginRight: 20,
            }}>
            (0.79%)
          </Text>
          <Text
            style={{
              textAlign: 'right',
              marginLeft: -10,
              color: Themes.AppTheme.black,
            }}>
            LTP:{' '}
            <FontAwesome5 name="rupee-sign" color={Themes.AppTheme.black} />
            96.05
            <Text style={{color: Themes.AppTheme.lightgreen}}>(59.68%) </Text>
          </Text>
        </View>
      </View>
      {/* Third View End */}
    </View>
  );
};
const Performance = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: Watchlist,
  second: Positions,
  third: Performance,
});

const PaperTrading = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Watchlist'},
    {key: 'second', title: 'Positions'},
    {key: 'third', title: 'Performance'},
  ]);

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
      <Text style={styles.subTitle}>Paper Trading</Text>
      {/* Tab Start */}
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
      {/* Tab Start End */}
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
  subTitle: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  PositionsLeftSideAmount: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  mainView: {flexDirection: 'row', justifyContent: 'space-between'},
  secondView: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Themes.AppTheme.lightgreen,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
