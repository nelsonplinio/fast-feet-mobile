import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import DeliveryDetails from '~/pages/Delivery/DeliveryDetails';
import ConfirmDelivery from '~/pages/Delivery/ConfirmDelivery';
import NewProblem from '~/pages/Delivery/NewProblem';
import Problems from '~/pages/Delivery/Problems';

import Profile from '~/pages/Profile';

const Stack = createStackNavigator();
const MaterialBottom = createMaterialBottomTabNavigator();

const DeliveryNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="DeliveryDetails" component={DeliveryDetails} />
      <Stack.Screen name="ConfirmDelivery" component={ConfirmDelivery} />
      <Stack.Screen name="NewProblem" component={NewProblem} />
      <Stack.Screen name="Problems" component={Problems} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <MaterialBottom.Navigator
      activeColor="#7159c1"
      sceneAnimationEnabled
      barStyle={{
        borderTopWidth: 2,
        backgroundColor: '#fff',
        borderTopColor: '#f1f1f1',
      }}
      inactiveColor="#rgba(100, 100, 100, 0.9)"
    >
      <MaterialBottom.Screen
        name="Delivery"
        component={DeliveryNavigator}
        options={{
          title: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="reorder" color={color} size={24} />
          ),
        }}
      />

      <MaterialBottom.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Meu perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="user-circle" color={color} size={24} />
          ),
        }}
      />
    </MaterialBottom.Navigator>
  );
};

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);
  return (
    <NavigationContainer>
      {signed ? (
        <>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <TabNavigator />
        </>
      ) : (
        <>
          <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
          <SignIn />
        </>
      )}
    </NavigationContainer>
  );
}
