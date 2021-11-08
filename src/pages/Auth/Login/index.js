import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from '~/theme/colors';
import LoginForm from './LoginForm';

export default function Login({navigation}) {
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
          <Text style={{fontWeight: 'bold'}}>Continue </Text>
          Study,
        </Text>
        <Text style={{fontSize: 30, color: colors.textBlue}}>
          Finish Your
          <Text style={{fontWeight: 'bold'}}> Goals</Text>
        </Text>
      </View>

      <LoginForm navigation={navigation} />

      <View style={{display: 'flex', flexDirection: 'row', marginTop: 15}}>
        <Text style={{color: colors.textBlue}}>Buat akun baru? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{fontWeight: 'bold', color: colors.textBlue}}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
