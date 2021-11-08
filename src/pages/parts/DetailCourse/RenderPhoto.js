import React from 'react';
import {FlatList, View, Image, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useState} from 'react/cjs/react.development';
import IconEye from '../../../../public/assets/images/icon-eye.svg';
import {colors} from '../../../theme/colors';
import ImageShow from './ImageShow';

export default function RenderPhoto({images}) {
  const [imageSelected, setImageSelected] = useState(null);
  return (
    <>
      {imageSelected ? (
        <ImageShow
          imageSelected={imageSelected}
          setImageSelected={setImageSelected}
        />
      ) : null}

      <FlatList
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        data={images}
        keyExtractor={item => item.id}
        renderItem={item => {
          return (
            <View style={{marginTop: 16}}>
              <TouchableOpacity onPress={() => setImageSelected(item)}>
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
                      backgroundColor: colors.green,
                      opacity: 0.2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}></View>
                  <SvgXml
                    style={{
                      height: 130,
                      width: 160,
                      position: 'absolute',
                      alignItems: 'center',
                      zIndex: 10,
                    }}
                    width="30"
                    height="30"
                    xml={IconEye}
                  />
                  <Image
                    style={{height: 130, width: 160}}
                    source={{uri: item.item.image}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </>
  );
}
