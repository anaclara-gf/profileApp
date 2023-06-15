import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersonalProfile, ProfissionalProfile} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {
          height: 50,
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        name="PersonalProfile"
        component={PersonalProfile}
        options={{
          tabBarLabel: 'Pessoal',
          tabBarIcon: ({color}) => <Icon name="user" size={16} color={color} />,
        }}
      />
      <Tab.Screen
        name="ProfissionalProfile"
        component={ProfissionalProfile}
        options={{
          tabBarLabel: 'Professional',
          tabBarIcon: ({color}) => (
            <Icon name="desktop" size={16} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={AppTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
