import { createStackNavigator } from '@react-navigation/stack';
import { InitialLoadingAnimationScreen } from '../screens/InitialLoadingAnimationScreen';
import React from 'react';
import { AuthStackNavigation } from './AuthStackNavigation';
import { BottomTabNavigation } from './BottomTabNavigation';
import { RegistrarVisitaScreen } from '../screens/RegistrarVisitaScreen';

type RootStackParamList = {
    InitialLoadingAnimation: undefined;
    AuthStackNavigation: undefined;
    App: undefined;
    RegistrarVisita: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppStackNavigation = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='InitialLoadingAnimation'
    >
        <Stack.Screen name="InitialLoadingAnimation" component={ InitialLoadingAnimationScreen } />
        <Stack.Screen name="AuthStackNavigation" component={ AuthStackNavigation } />
        <Stack.Screen name="App" component={ BottomTabNavigation } />
        <Stack.Screen name="RegistrarVisita" component={ RegistrarVisitaScreen } 
            options={{
                title: 'Registrar Nueva Visita',
                headerShown: true,
            }}
        />

    </Stack.Navigator>
  );
}