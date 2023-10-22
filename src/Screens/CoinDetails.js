import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Themes} from '../Appdata/colors';

const width = Dimensions.get('screen');
const CoinDetails = () => {
  return (
    <View style={style.container}>
      <View style={style.submitView}>
        <View style={style.SubsubmitView}>
          <View>
            <AntDesign name="close" style={style.closeIcon} />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={style.txtStyle}>
              <FontAwesome name="rupee" style={style.closeIcon} /> 11,11,853.00
            </Text>
            <Text style={style.submiTtxtStyle}>Available Margin</Text>
          </View>
          <View
            style={{
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 200,
              alignItems: 'flex-end',
            }}>
            <Text style={style.submiTtxtStyle}>Submit</Text>
          </View>
        </View>
        {/* Second View */}
        <View style={style.SubsubmitView}>
          <View>
            <Text style={style.mainTxt}>R</Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={style.txtStyle}>NIFTY 120CT23 19600 PE</Text>
            <Text style={style.submiTtxtStyle}>
              LTP: <FontAwesome name="rupee" color="grey" /> 95.55. 11:01 am
            </Text>
          </View>
          <View
            style={{
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 200,
              alignItems: 'flex-end',
            }}>
            <FontAwesome name="pencil" style={style.closeIcon} />
          </View>
        </View>
        {/* Second View End */}
      </View>
      <View style={style.butSellButtonView}>
        <TouchableOpacity style={style.buyButton}>
          <Text style={style.buyButtonTxt}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.sellButton}>
          <Text style={style.sellButtonTxt}>Sell</Text>
        </TouchableOpacity>
      </View>
      {/* Form Start */}
      <View style={{paddingHorizontal: 20}}>
        <View style={{...style.butSellButtonView, marginHorizontal: 0}}>
          <View>
            <Text style={style.formLabel}>Quantity*</Text>
            <TextInput
              style={style.inputHalf}
              placeholder="Entry Quantity"
              placeholderTextColor={'grey'}
            />
          </View>
          <View>
            <Text>{'  '}</Text>
            <TextInput
              style={style.inputHalf}
              placeholder="Entry Price (optional)"
              placeholderTextColor={'grey'}
            />
          </View>
        </View>

        <View style={{marginTop: 40}}>
          <Text style={style.formLabel}>Time Frame*</Text>
          <TextInput
            style={{...style.inputHalf, width: '100%'}}
            placeholder="Intraday"
            placeholderTextColor={'grey'}
          />
        </View>

        <View style={{...style.butSellButtonView, marginHorizontal: 0}}>
          <View>
            <Text style={style.formLabel}></Text>
            <TextInput
              style={style.inputHalf}
              placeholder="Stoploss"
              placeholderTextColor={'grey'}
            />
          </View>
          <View>
            <Text>{'  '}</Text>
            <TextInput
              style={style.inputHalf}
              placeholder="Target"
              placeholderTextColor={'grey'}
            />
          </View>
        </View>
      </View>
      {/* Form Start End */}
      <Text style={style.showlessTxt}>
        Show less{' '}
        <MaterialIcons style={{fontSize: 20}} name="keyboard-arrow-up" />
      </Text>
    </View>
  );
};

export default CoinDetails;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  submitView: {
    padding: 10,
  },
  SubsubmitView: {
    flexDirection: 'row',
  },
  closeIcon: {
    color: Themes.AppTheme.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  txtStyle: {
    color: Themes.AppTheme.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  submiTtxtStyle: {
    color: Themes.AppTheme.darkgrey,
  },
  mainTxt: {
    fontSize: 20,
    backgroundColor: Themes.AppTheme.darkgrey,
    textAlign: 'center',
    color: Themes.AppTheme.textColor,
    width: 25,
    height: 25,
    alignItems: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    borderRadius: 50,
    marginTop: 10,
    // marginRight: 10,
  },
  butSellButtonView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  buyButton: {
    width: '45%',
    height: 40,
    backgroundColor: Themes.AppTheme.lightgreen,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buyButtonTxt: {
    color: '#fff',
    fontSize: 18,
  },
  sellButton: {
    width: '45%',
    height: 40,
    backgroundColor: Themes.AppTheme.red,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sellButtonTxt: {
    color: '#fff',
    fontSize: 18,
  },
  formLabel: {
    color: Themes.AppTheme.black,
  },
  inputHalf: {
    borderBottomWidth: 1,
    borderBlockColor: Themes.AppTheme.black,
    width: 150,
  },
  showlessTxt: {
    color: Themes.AppTheme.black,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});
