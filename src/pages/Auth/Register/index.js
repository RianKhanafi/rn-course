import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from '~/theme/colors';
import RegisterForm from './RegisterForm';

export default function Register({navigation}) {
  return (
    <View
      style={{
        marginVertical: 16,
        marginHorizontal: 16,
        flex: 1,
        justifyContent: 'center',
      }}>
      <View style={{marginBottom: 50}}>
        <Text style={{fontSize: 30, color: colors.textBlue}}>
          <Text style={{fontWeight: 'bold'}}>Grow Skills </Text>
          from,
        </Text>
        <Text style={{fontSize: 30, color: colors.textBlue}}>Anywhere</Text>
      </View>
      <RegisterForm navigation={navigation} />

      <View style={{display: 'flex', flexDirection: 'row', marginTop: 15}}>
        <Text style={{color: colors.textBlue}}>Sudah punya akun? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{fontWeight: 'bold', color: colors.textBlue}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
