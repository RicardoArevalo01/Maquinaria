import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {DrawerNavigation} from './drawer';
import { AppStackNavigation } from './stack';
import { PerfilScreen } from '../screens/PerfilScreen';
import { View } from 'react-native';
import { ItemGroup, Title } from '../../components/shared';
import { useThemeStore } from '../../shared';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Stack = createStackNavigator();
export const ProjectRoutes = () => {

  const {
    theme: { theme, themeInfo },
  } = useThemeStore();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AppStackNavigation"
          component={AppStackNavigation}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="PerfilScreen"
          component={PerfilScreen}
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
                        justifyContent='flex-start'
                        width={'100%'}
                      >
                        <Icon 
                          name='arrow-back'
                          size={25}
                          color={theme.colors.onSurface}
                          onPress={() => props.navigation.goBack()}
                        />

                        <Title 
                          text='Perfil de Usuario'
                          weight='semibold'
                          style={{marginLeft: 20}}
                          color={theme.colors.onSurface}
                        />
                      </ItemGroup>
                  </View>
                </>
              );
            },
          }}
        />
      </Stack.Navigator>
    </>
  );
};
