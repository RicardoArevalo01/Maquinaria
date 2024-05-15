import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext, PermissionsContext} from '../context';
import {
  HomeScreen,
  LoadingScreen,
  LoginScreen,
  RecoveryPasswordScreen,
  RegisterScreen,
  SplashScreen,
  WelcomeScreen,
} from '../screens';
import {StackHeader} from './StackHeader';
import { TabNavigation } from './TabNavigation';
import { RegistrarVisitaScreen } from '../screens/visitas/RegistrarVisitaScreen';
import { SeleccionarClienteVisitaModal } from '../screens/visitas/SeleccionarClienteVisitaModal';

const Stack = createStackNavigator();
export const Navigator = () => {
  const {status, JWTInfo} = useContext(AuthContext);
  const {permissions} = useContext(PermissionsContext);

  if (permissions === 'unavailable' || status === 'checking') {
    return <SplashScreen />;
  }

  return (
    <>
      {permissions !== 'granted' ? (
        <WelcomeScreen />
      ) : (
        <>
          {status === 'notauthenticated' ? (
            // || (JWTInfo?.token ?? '').length === 0
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
                  header: props => (
                    <StackHeader title={'Registrate!'} backButton />
                  ),
                }}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="Workspace"
                component={ HomeScreen }
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="App"
                component={ TabNavigation }
                options={{
                  headerShown: true,
                }}
              />
              <Stack.Screen
                name="RegistrarVisita"
                component={ RegistrarVisitaScreen }
                options={{
                  headerShown: true,
                }}
              />
            </Stack.Navigator>
          )}
        </>
      )}
    </>
  );
};
