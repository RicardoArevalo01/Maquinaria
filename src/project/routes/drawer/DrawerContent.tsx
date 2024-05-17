import React, {memo} from 'react';
import {icons} from '../../../theme';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {View} from 'react-native';
import {Drawer, Switch, Text, TouchableRipple} from 'react-native-paper';
import {Alert} from '../../../utils';
import {useAuthStore, useThemeStore} from '../../../shared';
import { Title } from '../../../components/shared';

interface DrawerItem {
  icon: string;
  name: string;
  title: string;
  route: string;
}

const DrawerItems: DrawerItem[] = [
  {
    icon: icons.home,
    name: 'Inicio',
    title: '',
    route: 'Inicio',
  },
  {
    icon: icons.profile,
    name: 'Mi Perfil',
    title: '',
    route: 'ResetPasswordScreen',
  }, 
  {
    icon: icons.reloadPassword,
    name: 'Reiniciar Contraseña',
    title: '',
    route: 'ResetPasswordScreen',
  },
];

export const DrawerContent = memo(
  ({navigation, state}: DrawerContentComponentProps) => {
    const {
      auth: {status, jwtInfo},
      logOut,
    } = useAuthStore();

    const {
      theme: {
        theme,
        themeInfo: {isDarkTheme},
      },
      onToggleTheme,
    } = useThemeStore();

    const logout = () => {
      Alert.show('yesno', {
        title: 'Aviso',
        message: '¿Desea cerrar sesión?',
        onPress: logOut,
      });
    };

    return (
      <>
        <DrawerContentScrollView
          style={{
            backgroundColor: theme.colors.background,
          }}>
          {/* Parte del avatar */}
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text variant="labelSmall" style={{marginVertical: 10}}>
              Hola,{' '}
              <Title 
              size='small'
                text={status === 'authenticated'
                ? `${jwtInfo.firstName} ${jwtInfo.lastName}`
                : 'Invitado'}
              >
                
              </Title>
            </Text>
          </View>
          {/* Opciones de menu */}
          <Drawer.Section>
            {DrawerItems.map(({route, title, name, icon}, index) => (
              <Drawer.Item
                key={index}
                onPress={() => navigation.navigate(route, {title})}
                label={name}
                
                icon={icon}
                style={{borderRadius: 12}}
                active={
                  state.routes.findIndex(e => e.name === route) === state.index
                }
              />
            ))}
          </Drawer.Section>
          <TouchableRipple onPress={() => onToggleTheme()}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 12,
                paddingHorizontal: 25,
              }}>
              <Text variant="labelLarge">Tema Oscuro</Text>
              <View pointerEvents="none">
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </DrawerContentScrollView>
        {status === 'authenticated' && (
          <View style={{
            backgroundColor: theme.colors.background, 
            paddingBottom:20
          }}>
            <Drawer.Item
              onPress={logout}
              label={'Cerrar Sesión'}
              icon={icons.logout}
              style={{borderRadius: 12}}
              active={false}
            />
          </View>
        )}
      </>
    );
  },
);
