import React from 'react';
import {Dimensions, View, ActivityIndicator} from 'react-native';
import {colors} from '../theme/colors';

export default function Loading() {
  const {width, height} = Dimensions.get('window');
  return (
    <View
      style={{
        flexDirection: 'row',
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: height,
          width: width,
          backgroundColor: '#000',
          opacity: 0.1,
          position: 'absolute',
        }}></View>
      <ActivityIndicator size="large" color={colors.blue} />
    </View>
  );
}
