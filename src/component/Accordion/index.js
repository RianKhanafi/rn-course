import React, {useState} from 'react';
import {View} from 'react-native';

import IconPlay from '../../../public/assets/images/icon-play.svg';

import IconLock from '../../../public/assets/images/icon-lock.svg';
export default function Accordion({children}) {
  const [active, setActive] = useState(() => null);

  const toggle = id => {
    setActive(prev => (prev === id ? null : id));
  };
  return <View>{children(active, toggle)}</View>;
}

export {IconPlay, IconLock};
