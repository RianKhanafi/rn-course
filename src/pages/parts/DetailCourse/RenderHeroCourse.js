import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import IconCertivicate from '../../../../public/assets/images/certivicate.svg';
import IconStudent from '../../../../public/assets/images/student.svg';
import IconVideo from '../../../../public/assets/images/video.svg';
import {colors} from '../../../theme/colors';

export default function RenderHeroCourse({data}) {
  const {width, height} = Dimensions.get('window');
  return (
    <>
      <View
        style={{
          width: width,
          height: 250,
          position: 'relative',
        }}>
        <View
          style={{
            width: width,
            height: 250,
            position: 'absolute',
            backgroundColor: '#000000',
            opacity: 0.8,
            zIndex: 2,
          }}></View>
        <Image
          style={{
            width: width,
            height: 250,
            position: 'absolute',
            top: 0,
          }}
          source={{uri: data?.thumbnail}}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9,
          }}>
          <Text style={{color: '#ffffff'}}>Kelas Online:</Text>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: colors.green}}>
            {data?.name}
          </Text>
        </View>
      </View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View
          style={{
            width: width / 3 - 1,
            height: 60,
            borderBottomWidth: 1,
            borderColor: colors.lightGray,
          }}>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              paddingVertical: 5,
              paddingHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Text>
                <SvgXml width="25" height="25" xml={IconStudent} />
              </Text>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 12, color: colors.textGray}}>
                Student
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: colors.lightBlue,
                }}>
                {data?.total_student}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: width / 3 + 2,
            height: 60,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderColor: colors.lightGray,
          }}>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              paddingVertical: 5,
              paddingHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Text>
                <SvgXml width="25" height="25" xml={IconVideo} />
              </Text>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 12, color: colors.textGray}}>Video</Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: colors.lightBlue,
                }}>
                {data?.total_videos}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: width / 3 - 1,
            height: 60,
            borderBottomWidth: 1,
            borderColor: colors.lightGray,
          }}>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              paddingVertical: 5,
              paddingHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Text>
                <SvgXml width="25" height="25" xml={IconCertivicate} />
              </Text>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 12, color: colors.textGray}}>
                Certificate
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: colors.lightBlue,
                }}>
                {data?.certificate ? 'TERSEDIA' : 'TIDAK'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
