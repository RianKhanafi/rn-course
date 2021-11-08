import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Body from '~/pages/parts/Body';
import Header from '~/pages/parts/Header';
import Category from './parts/Category';

export default function Home({navigation}) {
  const onLogout = ({navigation}) => {
    AsyncStorage.removeItem('MICRO:token');
    navigation.navigate('AuthRoute');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header navigation={navigation} />
          <Body navigation={navigation} />
          <Category />
        </View>
      </ScrollView>
      {/* <Button onPress={onLogout} title="a" /> */}
    </SafeAreaView>
  );
}
