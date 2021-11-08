import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from '~/component/button';
import Input from '~/component/input';
import apiLogin from '~/constants/api/users';
import fieldError from '~/helpers/fieldError';
import {setAuthorizationHeader} from '../../../config/axios';

export default function LoginForm({navigation}) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState([]);

  const onLogin = () => {
    console.log('onLogin');
    apiLogin
      .login(state)
      .then(res => {
        AsyncStorage.setItem('MICRO:token', JSON.stringify(res.data));
        setAuthorizationHeader(res.data.token);
        setState({email: '', password: ''});
        navigation.navigate('PageRoute');
      })
      .catch(error => {
        console.log('err', error.response);
        setError(error.response.data.message);
      });
  };

  const ERROR = fieldError(error);

  return (
    <>
      <Input
        error={ERROR?.email?.message ?? null}
        label="Email Address"
        placeholder="your email address"
        value={state.email}
        onChangeText={e => setState({...state, email: e})}
      />
      <View style={{marginTop: 15}}></View>
      <Input
        error={ERROR?.password?.message ?? null}
        label="Passsword"
        placeholder="your password"
        value={state.password}
        onChangeText={e => setState({...state, password: e})}
        secureTextEntry={true}
      />
      <Button onPress={onLogin} title="Login" style={{marginTop: 15}} />
    </>
  );
}
