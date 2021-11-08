import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

export default function AuthRoute({navigation}) {
  const Route = createStackNavigator();

  const [token, setToken] = useState({
    loading: true,
    token: null,
  });

  useEffect(() => {
    AsyncStorage.getItem('MICRO:token').then(response => {
      console.log(response);
      if (response !== null) {
        setToken({loading: false, token: response});
        navigation.navigate('PageRoute');
      } else {
        setToken({loading: false, token: null});
      }
    });
  }, [, navigation]);

  return (
    <Route.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Route.Screen name="Login" component={Login} />
      <Route.Screen name="Register" component={Register} />
      <Route.Screen name="SplashScreen" component={Login} />
    </Route.Navigator>
  );
}
