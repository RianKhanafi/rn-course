import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {colors} from '../../theme/colors';
import IconBusiness from '../../../public/assets/images/icon-business-development.svg';
import IconContentWriter from '../../../public/assets/images/icon-content-writer.svg';
import IconProductAdvertisement from '../../../public/assets/images/icon-productAdvertisement.svg';
import IconRelationship from '../../../public/assets/images/icon-customer-relationship.svg';
import IconGameDevelopment from '../../../public/assets/images/icon-game-development.svg';
import IconGuidance from '../../../public/assets/images/icon-travel-guidance.svg';

import {SvgXml} from 'react-native-svg';
export default function Category() {
  const categoryData = [
    {
      icon: IconBusiness,
      title: 'Business Development',
      count: '12,493 Courses',
    },
    {
      icon: IconContentWriter,
      title: 'Product Advertisement',
      count: '478 Courses',
    },
    {
      icon: IconProductAdvertisement,
      title: 'Product Advertisement',
      count: '478 Courses',
    },
    {
      icon: IconRelationship,
      title: 'Customer Relationship',
      count: '553 Courses',
    },
    {
      icon: IconGameDevelopment,
      title: 'Game Development',
      count: '7,309 Courses',
    },
    {
      icon: IconGuidance,
      title: 'Travel Guidance',
      count: '73 Courses',
    },
  ];
  return (
    <View style={{paddingHorizontal: 16, paddingVertical: 16, marginTop: 15}}>
      <Text style={{color: colors.textGray}}>Category</Text>
      <Text style={{fontSize: 18, color: colors.textBlue, fontWeight: 'bold'}}>
        Category & <Text style={{color: colors.green}}>Learn</Text>
      </Text>

      <View style={{marginTop: 20}}>
        <View>
          <FlatList
            nestedScrollEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryData}
            keyExtractor={item => item.id}
            renderItem={item => {
              return (
                <View style={{marginRight: 16}}>
                  <View
                    style={{
                      height: 150,
                      width: 115,
                      borderWidth: 1,
                      borderColor: '#D0E5FF',
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View>
                      <SvgXml
                        width="38"
                        height="38"
                        xml={item.item.icon}
                        color="red"
                      />
                      <Text
                        style={{
                          fontSize: 15,
                          marginTop: 15,
                          color: colors.lightBlue,
                        }}>
                        Business Development
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: colors.textGray,
                          marginTop: 5,
                        }}>
                        12,493 Courses
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
