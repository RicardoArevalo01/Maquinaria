import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen, RegistrarVisitaScreen } from '../../screens';
import { TabNavigation } from '../tab';
import { useThemeStore } from '../../../shared';
import { View } from 'react-native';
import { ItemGroup, Title } from '../../../components/shared';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { darkenColor, lightenColor } from '../../../helpers';
import { icons } from '../../../theme';

const Stack = createStackNavigator()

export const AppStackNavigation = () => {

  const { 
    theme: { theme, themeInfo },
   } = useThemeStore();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.colors.elevation.level5,
            elevation: 0,
          },
          headerTintColor: theme.colors.onSurface,
        }}
      >
        <Stack.Screen
          name="Workspace"
          component={ HomeScreen }
          options={{
            headerShown: true,
            header(props) {
              return (
                <>
                  <View
                    style={{
                      backgroundColor: theme.colors.elevation.level5,
                      elevation: 0,
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                      <ItemGroup
                        paddinHorizontal={25}
                        width={'100%'}
                      >
                        
                        <Title 
                          text='Maquinarias Enriques'
                          color={theme.colors.onSurface}
                        />
                        <Icon 
                          name={icons.profile}
                          size={30}
                          color={theme.colors.onSurface}
                          onPress={() => props.navigation.navigate('PerfilScreen' as never)}
                        />
                      </ItemGroup>
                  </View>
                </>
              );
            },
          }}
        />
        <Stack.Screen
          name="App"
          component={ TabNavigation }
          options={{
            headerShown: true,
            headerTitle: 'Planificación de Visitas',
            header(props) {
              return (
                <>
                  <View
                    style={{
                      backgroundColor:theme.colors.primary,
                      elevation: 0,
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                      <ItemGroup
                        paddinHorizontal={25}
                        width={'100%'}
                      >
                        <ItemGroup>
                          <Icon 
                            name='arrow-back'
                            size={25}
                            color={theme.colors.onSecondary}
                            style={{
                              marginRight: 10,
                            }}
                            onPress={() => props.navigation.goBack()}
                          />
                          <Title 
                            text='Planificación de Visitas'
                            weight='semibold'
                            color={theme.colors.onSecondary}
                          />
                        </ItemGroup>
                        <Icon 
                          name={icons.profile}
                          size={30}
                          color={theme.colors.onSecondary}
                          onPress={() => props.navigation.navigate('PerfilScreen' as never)}
                        />
                      </ItemGroup>
                  </View>
                </>
              );
            },
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
    </>
  );
};
