import React, {useState, useCallback} from 'react';
import Modal from '../../../component/Modal';
import {Text, Alert, View, Dimensions, Image} from 'react-native';

export default function ImageShow({imageSelected, setImageSelected}) {
  const [visible, setVisible] = useState(() => true);

  const {width} = Dimensions.get('window');

  return (
    <Modal
      visible={visible}
      setVisible={() => {
        setVisible(false);
        setImageSelected(null);
      }}>
      <View style={{height: 300, width: width}}>
        <Image
          style={{width: width, height: 300}}
          source={{uri: imageSelected.item.image}}
        />
      </View>
    </Modal>
  );
}
