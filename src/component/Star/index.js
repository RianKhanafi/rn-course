import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Svg, {
  ClipPath,
  Defs,
  LinearGradient,
  Stop,
  Ellipse,
  SvgXml,
} from 'react-native-svg';

import IconStar from '../../../public/assets/images/icon-star.svg';
import {colors} from '../../theme/colors';

export default function Star({value, height, width}) {
  const star = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value; index++) {
    leftPos = leftPos + width;
    star.push(
      <SvgXml
        width={width}
        height={height}
        fill={colors.yellow}
        xml={IconStar}
      />,
    );
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5 - value; index++) {
    starPlaceholder.push(
      <SvgXml
        width={width}
        height={height}
        fill={colors.lightGray}
        xml={IconStar}
      />,
    );
  }

  return (
    <>
      <View style={{flexDirection: 'row'}}>
        {star}
        {starPlaceholder}
      </View>
    </>
  );
}
