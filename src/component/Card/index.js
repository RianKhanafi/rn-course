import React from 'react';
import {View, Text, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {colors} from '../../theme/colors';
import {IconPlay} from '../Accordion';

export default function Card({name, level, thumbnail, style}) {
  return (
    <>
      <View
        style={{
          height: 130,
          width: 160,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 15,
          overflow: 'hidden',
          position: 'relative',
          ...style,
        }}>
        <View
          style={{
            height: 130,
            width: 160,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
            // backgroundColor: colors.green,
            // opacity: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SvgXml width="30" height="30" xml={IconPlay} fill={colors.orange} />
        </View>
        <Image
          // style={styles.tinyLogo}
          style={{
            width: 130,
            aspectRatio: 1,
            height: 160,
            resizeMode: 'cover',
          }}
          source={{
            uri: thumbnail,
          }}
        />
      </View>
      <Text style={{color: colors.textBlue, marginTop: 10}}>{name}</Text>
      <Text style={{fontSize: 12, color: colors.textGray}}>{level}</Text>
    </>
  );
}
