import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { OlvidePasswordScreen } from '../screens/OlvidePasswordScreen';
import { LoadingAnimationScreen } from '../screens/LoadingAnimationScreen';
import React from 'react';

type RootStackParamList = {
    Login: undefined;
    OlvidePassword: undefined;
    LoadingAnimationScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AuthStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={ LoginScreen } />
      <Stack.Screen name="LoadingAnimationScreen" component={ LoadingAnimationScreen } />
      <Stack.Screen name="OlvidePassword" component={ OlvidePasswordScreen } />
    </Stack.Navigator>
  );
}