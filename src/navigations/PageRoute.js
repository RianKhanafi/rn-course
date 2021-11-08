import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import Home from '../pages/Home';
import DetailCourse from '../pages/DetailCourse';
import {colors} from '../theme/colors';
import AllCourse from '../pages/AllCourse';

export default function PageRoute() {
  const Route = createStackNavigator();
  return (
    <Route.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <Route.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Route.Screen
        name="DetailCourse"
        component={DetailCourse}
        options={
          {
            // headerTintColor: colors.blue,
            // headerBackground: colors.blue,
            // headerPressColor: colors.red,
          }
        }
      />
      <Route.Screen
        name="AllCourse"
        component={AllCourse}
        options={
          {
            // headerShown: false,
            // headerTintColor: colors.blue,
            // headerBackground: colors.blue,
            // headerPressColor: colors.red,
          }
        }
      />
    </Route.Navigator>
  );
}
