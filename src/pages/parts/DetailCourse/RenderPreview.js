import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useState} from 'react/cjs/react.development';
import Accordion, {IconLock, IconPlay} from '../../../component/Accordion';
import AccordionItem from '../../../component/Accordion/item';
import {colors} from '../../../theme/colors';
import VideoShow from './VideoShow';

export default function RenderPreview({priview}) {
  const [previewSelected, setPreviewSelected] = useState(() => null);
  return (
    <>
      {previewSelected ? (
        <VideoShow
          previewSelected={previewSelected}
          setPreviewSelected={setPreviewSelected}
        />
      ) : null}
      <Accordion>
        {(active, toggle) => (
          <View>
            {(priview ?? []).map((item, index) => {
              return (
                <AccordionItem
                  id={item.id}
                  name={item.name}
                  child={item.lessions}
                  active={active}
                  toggle={toggle}
                  key={`${index}-${item.id}`}>
                  <View style={{backgroundColor: '#eaeaea'}}>
                    {item.lessions.length ? (
                      item.lessions.map((child, childIndex) => (
                        <View
                          key={childIndex + ' ' + index}
                          style={{
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              color: colors.textGray,
                              fontWeight: '400',
                              letterSpacing: 1,
                              lineHeight: 18,
                            }}>
                            {child?.name ?? 'Course Name'}
                          </Text>

                          <View>
                            {childIndex === 0 ? (
                              <TouchableOpacity
                                onPress={() => setPreviewSelected(child)}>
                                <SvgXml
                                  width="25"
                                  height="25"
                                  fill={colors.blue}
                                  xml={IconPlay}
                                />
                              </TouchableOpacity>
                            ) : null}
                            {!child.isPreviewed && childIndex > 0 ? (
                              <SvgXml width="25" height="25" xml={IconLock} />
                            ) : null}
                          </View>
                        </View>
                      ))
                    ) : (
                      <Text>Lession</Text>
                    )}
                  </View>
                </AccordionItem>
              );
            })}
          </View>
        )}
      </Accordion>
    </>
  );
}
