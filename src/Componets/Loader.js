import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export default function Loader({check}) {
  return (
    check && (
      <View
        style={{
          position: 'absolute',
          zIndex: 5555555,
          backgroundColor: '#55555599',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  );
}
