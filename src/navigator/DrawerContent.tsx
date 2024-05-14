import React, {memo, useContext} from 'react';
import {icons} from '../theme/appTheme';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {View} from 'react-native';
import {Drawer, Switch, Text, TouchableRipple} from 'react-native-paper';
import {AuthContext, ThemeContext} from '../context';
import {Alert} from '../utils';

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
    route: 'TabNavigation',
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
    const {JWTInfo, logOut, status} = useContext(AuthContext);
    const {theme, themeInfo, toggleTheme} = useContext(ThemeContext);

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
              <Text variant="labelLarge">
                {status === 'authenticated'
                  ? `${JWTInfo.firstName} ${JWTInfo.lastName}`
                  : 'Invitado'}
              </Text>
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
          <TouchableRipple onPress={() => toggleTheme()}>
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
                <Switch value={themeInfo.isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </DrawerContentScrollView>
        {status === 'authenticated' && (
          <View style={{backgroundColor: theme.colors.background}}>
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
