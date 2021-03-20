/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import { LogBox } from 'react-native';
// require('react-native').unstable_enableLogBox();

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from './src/services/navigation';
import { createCompatNavigatorFactory } from '@react-navigation/compat';

import HomeScreen from './src/home';
import DetailsScreen from './src/details';
import GenerateQrCode from './src/qr/generate';
import ScanQrCode from './src/qr/scanqr';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Navigation from './src/services/navigation';

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const RootStack = createCompatNavigatorFactory(createStackNavigator)(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        // headerShown: false // hide default header 
        headerLeft: () => (
          <TouchableOpacity style={{
            width: 45, height: 45,
            justifyContent: "center",
            alignItems: "center"
          }}
            onPress={() => Navigation.toogleDrwaer()}
          >
            <Image source={require("./src/assets/imgs/open-menu.png")}
              style={{ width: 25, height: 25, resizeMode: "contain" }}></Image>
          </TouchableOpacity>
        ),
      }
    },
    Details: DetailsScreen,
    GenerateQR: GenerateQrCode,
    ScanQR: ScanQrCode,
  },
  {
    initialRouteName: 'Home',
  }
);

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={RootStack}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{ drawerLabel: 'Updates', title: "Updates" }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile', title: "Profile" }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  React.useEffect(() => {
    return () => (isReadyRef.current = false);
  }, []);

  console.disableYellowBox = true;
  // LogBox.ignoreAllLogs(true);
  return (
    < NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }
      }
    >
      <MyDrawer />
      {/* <RootStack /> */}
    </NavigationContainer >
  );
}

export default App;