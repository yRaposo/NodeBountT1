import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/views/HomeScreen';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={({ route }) => {
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          return <Icon name={iconName} size={size} color={color} />;
        }
      }}
      >
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title:'', headerTransparent: true}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}