import React from 'react';
import {
  Modal as RnModal,
  Alert,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default function Modal({children, visible, setVisible}) {
  const {width, height} = Dimensions.get('window');
  return (
    <RnModal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}>
      <View
        style={{
          height: height,
          width: width,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: height,
            width: width,
            backgroundColor: '#000',
            position: 'absolute',
            opacity: 0.8,
          }}></View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 10,
            marginRight: 15,
            marginTop: 15,
          }}
          onPress={() => setVisible(false)}>
          <Text style={{color: '#fff', fontSize: 20}}>X</Text>
        </TouchableOpacity>
        {children}
      </View>
    </RnModal>
  );
}
