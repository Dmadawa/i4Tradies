import { ActivityIndicator, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'

import CompanyScreen from 'App/Containers/Company/companyScreen'
import { DrawerContainer } from 'App/Components/drawer'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Listcreen from './companyStckNavigator';
import LoginScreen from 'App/Containers/Auth/loginScreen'
import ProfileScreen from 'App/Containers/Profile/profileScreen'
import React from 'react'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel: false,
      showIcon: true,
      tintColor: '#333',
      activeTintColor: '#aaa',
    }}>
      <Tab.Screen name="Home" component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon style={{ marginTop: 10 }} name={'home'} size={30} color="#000" />
          ),
          tabBarOptions: { showLabel: false }
        }}
        />
      <Tab.Screen name="profile" component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon5 style={{ marginTop: 10 }} name={'meh-blank'} size={30} color="#000" />
          )
        }}
      />
      <Tab.Screen name="list" component={Listcreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon style={{ marginTop: 10 }} name={'list'} size={30} color="#000" />
          )
        }}
      />
      <Tab.Screen name="rating" component={LoginScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon style={{ marginTop: 10 }} name={'star'} size={30} color="#000" />
          )
        }}
      />
      <Tab.Screen name="rat" component={LoginScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon style={{ marginTop: 10 }} name={'history'} size={30} color="#000" />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const LoginStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        title: '',
        headerShown: false
      }},
    MainScreen: {
      screen: LoginScreen,
      navigationOptions: {
        title: '',
        headerShown: false
      },
    },
    HomeTab: MyTabs
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(LoginStack)
