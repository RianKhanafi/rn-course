import React from 'react';
import {Linking, ScrollView, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import apiCourses from '~/constants/api/courses';
import Loading from '../component/Loading';
import {colors} from '../theme/colors';
import HappyStudent from './parts/DetailCourse/HappyStudent';
import RenderHeroCourse from './parts/DetailCourse/RenderHeroCourse';
import RenderPhoto from './parts/DetailCourse/RenderPhoto';
import RenderPreview from './parts/DetailCourse/RenderPreview';
import Button from '~/component/button';
export default function DetailCourse({route, navigation}) {
  const {isLoading, error, data} = useQuery('coursesDetail', () =>
    apiCourses.coursesDetail(route.params.id),
  );

  return (
    <View>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <RenderHeroCourse data={data} />
          <View
            style={{paddingHorizontal: 16, paddingVertical: 16, marginTop: 10}}>
            <Text style={{fontSize: 18}}>
              About <Text style={{color: colors.green}}>Course</Text>
            </Text>

            <Text
              style={{
                color: colors.textGray,
                marginTop: 15,
                fontWeight: '300',
                letterSpacing: 1,
                lineHeight: 18,
              }}>
              {data?.description ?? 'No Description'}
            </Text>
          </View>

          <View style={{paddingVertical: 16, paddingHorizontal: 16}}>
            <Text style={{fontSize: 18}}>
              Course <Text style={{color: colors.green}}>Photos</Text>
            </Text>

            <RenderPhoto images={data?.images ?? []} />

            <Text style={{fontSize: 18, marginTop: 10, marginBottom: 10}}>
              You will <Text style={{color: colors.green}}>Learn</Text>
            </Text>

            <RenderPreview priview={data?.chapters ?? []} />

            <Button
              title="Start Learn"
              style={{marginTop: 15}}
              onPress={() => {
                Linking.openURL(`https://memberpage-microservices.netlify.app`);
                return false;
              }}
            />
          </View>
          <View style={{paddingVertical: 10, paddingHorizontal: 15}}>
            <Text style={{fontSize: 18, marginTop: 10, marginBottom: 10}}>
              Happy <Text style={{color: colors.green}}>Student</Text>
            </Text>
            {(data.reviews ?? []).map((testimoni, id) => (
              <HappyStudent data={testimoni} key={id} />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
