import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import Button from '~/component/button';
import Input from '~/component/input';
import {colors} from '~/theme/colors';
import ImageBg from '../../../public/assets/images/image-bg.png';

export default function Home({navigation}) {
  const [search, setSearch] = useState('');
  return (
    <View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#2E37A4',
          height: 250,
          width: Dimensions.get('window').width,
          paddingHorizontal: 16,
          paddingVertical: 16,
          overflow: 'hidden',
        }}>
        <View
          style={{
            position: 'absolute',
            height: 250,
            width: Dimensions.get('window').width,
          }}>
          <Image source={ImageBg} />
        </View>
        <Text style={{fontSize: 25, color: '#ffffff'}}>
          <Text style={{color: colors.green, fontWeight: 'bold'}}>
            The New{' '}
          </Text>
          Way to
        </Text>
        <Text style={{fontSize: 25, color: '#ffffff'}}>
          Achieve Good
          <Text style={{color: colors.green, fontWeight: 'bold'}}>Skills</Text>
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Input
            inputStyle={{
              color: '#000000',
              borderColor: '#ffffff',
              width: Dimensions.get('window').width - 130,
              backgroundColor: '#fff',
              // fontSize: '16',
            }}
            value={search}
            onChangeText={e => setSearch(e)}
            placeholder="Serach Course"
            placeholderTextColor="#a7a7a7"
          />
          <Button
            title="Search"
            style={{height: 55, marginLeft: 10}}
            onPress={() => {
              navigation.navigate('AllCourse', {
                search: search,
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}
