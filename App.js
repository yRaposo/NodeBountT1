import React from 'react';
import { NavigationContainer, useLinkBuilder } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';

import HomeScreen from './src/views/HomeScreen';
import { View } from 'react-native';
import { PlatformPressable } from '@react-navigation/elements';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-filled';
            } if (route.name === 'Cards') {
              iconName = 'credit-card';
            } if (route.name === 'Wallet') {
              iconName = 'wallet';
            } if (route.name === 'Config') {
              iconName = 'settings';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#078A83',
          tabBarInactiveTintColor: '#FFFFFF',
          tabBarStyle: {
            backgroundColor: '#252A2D',
            borderTopWidth: 0,
          },
          tabBarIconStyle: {
            size: 40,
          },
          headerTransparent: true,
          headerTitle: '',

        })}
      >
        <Tab.Screen name="Home"
          options={{
            title: '',
          }}
          component={HomeScreen}
        />
        <Tab.Screen name="Cards"
          options={{
            title: '',
          }}
          component={HomeScreen}
        />
        <Tab.Screen name="Wallet"
          options={{
            title: '',
          }}
          component={HomeScreen}
        />
        <Tab.Screen name="Config"
          options={{
            title: '',
          }}
          component={HomeScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}