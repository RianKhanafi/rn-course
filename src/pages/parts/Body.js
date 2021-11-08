import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useQuery} from 'react-query';
import apiCourses from '~/constants/api/courses.js';
import Card from '../../component/Card';
import {colors} from '../../theme/colors';

export default function Body({navigation}) {
  const {isLoading, error, data} = useQuery('repoData', () =>
    apiCourses.courses(),
  );

  return (
    <View>
      <View style={{paddingVertical: 16, paddingHorizontal: 16, marginTop: 15}}>
        <Text style={{color: colors.textGray}}>New Classes</Text>
        <Text
          style={{fontSize: 18, color: colors.textBlue, fontWeight: 'bold'}}>
          Summer <Text style={{color: colors.green}}>Productive</Text>
        </Text>
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingHorizontal: 16}}
          data={data?.data ?? []}
          keyExtractor={item => item.id}
          renderItem={item => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailCourse', {
                    id: item.item.id,
                  })
                }>
                <Card
                  name={item.item.name}
                  level={item.item.level}
                  thumbnail={item.item.thumbnail}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
