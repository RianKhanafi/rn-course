import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {colors} from '../../theme/colors';
export default function Input({
  label = '',
  placeholder = '',
  onChangeText = () => {},
  style = {},
  error = '',
  secureTextEntry = false,
  value = '',
  inputStyle = {},
  placeholderTextColor,
}) {
  const [focus, setFocus] = useState(false);

  return (
    <View style={style}>
      {label ? (
        <Text
          style={[
            {fontSize: 16, color: colors.textBlue, paddingBottom: 8},
            error ? {color: colors.textRed} : {},
          ]}>
          {label}
        </Text>
      ) : (
        <></>
      )}
      <TextInput
        style={[
          {
            borderWidth: 1,
            borderColor: colors.lightGray,
            paddingHorizontal: 12,
            paddingVertical: 12,
          },
          inputStyle,
          focus ? {borderColor: colors.green} : {},
          error ? {borderColor: colors.red} : {},
        ]}
        value={value}
        placeholderTextColor={placeholderTextColor ?? colors.textLightGray}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={secureTextEntry}
      />
      {error ? (
        <Text style={{color: colors.textRed}}>{error}</Text>
      ) : (
        <View></View>
      )}
    </View>
  );
}
