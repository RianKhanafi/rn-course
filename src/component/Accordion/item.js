import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../theme/colors';
// import {CSSTransition} from 'react-transition-group';
import ArrowDown from '../../../public/assets/images/icon-arrow-down.svg';
import ArrowUp from '../../../public/assets/images/icon-arrow-up.svg';
// import IconPlay from '../../../public/assets/images/btn_play.svg';

import {SvgXml} from 'react-native-svg';
export default function AccordionItem({
  name,
  id,
  child,
  active,
  toggle,
  children,
}) {
  const [height, setHeight] = useState(() => 0);
  const calcHeight = e => {
    setHeight(e.offsetHeight);
  };
  console.log(child);
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colors.lightGray,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            color: colors.textGray,
            fontWeight: '400',
            letterSpacing: 1,
            lineHeight: 18,
          }}>
          {name}
        </Text>
        {child && child.length ? (
          <TouchableOpacity
            style={{width: 30, height: 30}}
            onPress={() => toggle(id)}>
            <SvgXml
              height="25"
              width="25"
              xml={active === id ? ArrowUp : ArrowDown}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      <View>{active === id ? children : null}</View>
    </View>
  );
}
