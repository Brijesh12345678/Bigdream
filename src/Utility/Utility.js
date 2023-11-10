// show message alert

import {View, Text, Modal, ActivityIndicator, Alert} from 'react-native';

export const ShowProgressBar = props => {
  const {isLoaderShow, message} = props;
  return (
    <>
      <Modal transparent={true} onTouchCancel={false} visible={isLoaderShow}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: '#00000055',
          }}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <ActivityIndicator
              animating={true}
              color={'#ffffff'}
              size="large"
              style={{
                margin: 15,
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};
