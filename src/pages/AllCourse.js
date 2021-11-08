import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  //   SearchBar,
} from 'react-native';
import {useQuery} from 'react-query';
import apiCourses from '~/constants/api/courses';
import Card from '../component/Card';
import Loading from '../component/Loading';
import {colors} from '../theme/colors';
// import {SearchBar} from 'react-native-elements';
export default function AllCourse({route, navigation}) {
  const {search} = route.params;

  const {isLoading, error, data} = useQuery('courses', () =>
    apiCourses.courses({q: search}),
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{paddingVertical: 16, paddingHorizontal: 16, marginTop: 15}}>
          <Text style={{color: colors.textGray}}>All Classes</Text>
          <Text
            style={{fontSize: 18, color: colors.textBlue, fontWeight: 'bold'}}>
            Summer <Text style={{color: colors.green}}>Productive</Text>
          </Text>
        </View>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{paddingHorizontal: 16}}
            data={data?.data ?? []}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={item => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DetailCourse', {
                      id: item.item.id,
                    })
                  }>
                  <Card
                    style={{marginTop: 15}}
                    name={item.item.name}
                    level={item.item.level}
                    thumbnail={item.item.thumbnail}
                  />
                </TouchableOpacity>
              );
            }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
