/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import AuthRoute from './src/navigations/AuthRoute';
import PageRoute from './src/navigations/PageRoute';
import NotFound from './src/pages/404';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  const appStack = createNativeStackNavigator();
  // const Drawer = createDrawerNavigator();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer fallback={<Text>Loading...</Text>}>
        <appStack.Navigator
          headerMode="none"
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <appStack.Screen name="AuthRoute" component={AuthRoute} />
          <appStack.Screen name="PageRoute" component={PageRoute} />
          <appStack.Screen name="*" component={NotFound} />

          {/* <appStack.Group>
            <appStack.Screen name="*" component={NotFound} />
          </appStack.Group> */}
        </appStack.Navigator>
        {/* <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={MyDrawer} />
        </Drawer.Navigator> */}
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
