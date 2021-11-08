import React from 'react';
import {View, Text, Image} from 'react-native';
import Star from '../../../component/Star';
import {colors} from '../../../theme/colors';

export default function HappyStudent({data}) {
  const firstLatter = ([first, ...other]) => {
    return [first.toUpperCase(), ...other].join('');
  };
  return (
    <View style={{paddingBottom: 5}}>
      <View style={{paddingVertical: 10, flexDirection: 'row'}}>
        <Image
          style={{width: 40, height: 40}}
          source={
            data?.users?.avatar
              ? {
                  uri: data?.users?.avatar,
                }
              : require('../../../../public/assets/images/default.png')
          }
        />
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            {firstLatter(data?.users?.name ?? 'name')}
          </Text>
          <Text style={{fontSize: 13, color: colors.textGray}}>
            {data?.users?.profession ?? 'Profession'}
          </Text>
        </View>
      </View>
      <Star value={data?.rating ?? 0} width={20} height={19} />
      <Text style={{paddingVertical: 10}}>{data?.note ?? 'Review'}</Text>
    </View>
  );
}
