import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {colors} from '../../theme/colors';
export default function Button({onPress, title, style}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: colors.orange,
          paddingVertical: 16,
          paddingHorizontal: 16,
          textTransform: 'uppercase',
        },
        style,
      ]}>
      <Text
        style={{
          color: '#ffffff',
          fontSize: 16,
          fontWeight: 'bold',
          alignSelf: 'center',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
