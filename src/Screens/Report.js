import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Themes} from '../Appdata/colors';
import {List, ListItem} from 'native-base';
import {reportList} from '../Componets/AppData';
const FirstRoute = () => {
  return reportList?.map((val, index) => {
    return (
      <View style={{flex: 1}}>
        <List>
          <ListItem style={styles.listItemStyle}>
            <Text>{val.name}</Text>
            <AntDesign name="arrowright" />
          </ListItem>
        </List>
      </View>
    );
  });
};

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);
const ThirdRoute = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});
const Report = ({naviation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'EQUITY'},
    {key: 'second', title: 'DERIVATIVES'},
    {key: 'third', title: 'MUTUAL FUNDAS'},
  ]);
  return (
    <View style={styles.container}>
      {/* Header View  */}
      <View style={styles.headerMainView}>
        <View style={styles.headerSubView}>
          <Entypo name="menu" color="black" style={styles.menuIcon} />
          <Text style={styles.haderTitle}>REPORTS</Text>
        </View>
        <View style={styles.headerSubView}>
          <AntDesign style={styles.bellIcon} name="bells" color="black" />
          <Entypo style={styles.bellIcon} name="message" color="black" />
        </View>
      </View>
      {/* Header View End */}
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  haderTitle: {
    color: Themes.AppTheme.black,
    fontSize: 20,
    marginLeft: 20,
  },
  headerMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  menuIcon: {
    fontSize: 25,
  },
  headerSubView: {
    flexDirection: 'row',
  },
  bellIcon: {
    fontSize: 25,
    marginRight: 5,
    color: '#c43243',
  },
  listItemStyle: {
    justifyContent: 'space-between',
  },
});
