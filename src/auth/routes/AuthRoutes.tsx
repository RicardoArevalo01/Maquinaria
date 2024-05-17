import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, RecoveryPasswordScreen, RegisterScreen} from '../screens';
import {StackHeader} from '../../theme';
import React from 'react';

const Stack = createStackNavigator();
export const AuthRoutes = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RecoveryPasswordScreen"
          component={RecoveryPasswordScreen}
          options={{
            header: props => (
              <StackHeader title={'Recuperar Contraseña'} backButton />
            ),
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            header: props => <StackHeader title={'Registrate!'} backButton />,
          }}
        />
      </Stack.Navigator>
    </>
  );
};
