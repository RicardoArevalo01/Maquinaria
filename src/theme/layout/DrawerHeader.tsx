import React, {memo} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Appbar} from 'react-native-paper';
import {Image, View} from 'react-native';
import {icons} from '../constants/appTheme';
import {useCustomMenu, CustomMenu} from '../../components';
import {Alert} from '../../utils';
import {useAuthStore} from '../../shared/hooks';

interface Props {
  title?: string;
}

export const DrawerHeader = memo(({title = ''}: Props) => {
  const {logOut} = useAuthStore();
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const {menuPosition, showMenu, hideMenu, isMenuVisible} = useCustomMenu();

  const logout = () => {
    Alert.show('yesno', {
      title: 'Aviso',
      message: '¿Desea cerrar sesión?',
      onPress: logOut,
    });
  };

  return (
    <>
      <Appbar.Header
        style={{
          justifyContent: 'space-between',
          //backgroundColor: CustomColors.darkBlue,
        }}
        elevated>
        <Appbar.Action
          icon={icons.menu}
          //color={'white'}
          onPress={() => navigation.openDrawer()}
        />
        {title.length === 0 ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}>
            <Image
              source={require('../../assets/images/banner.png')}
              style={{
                height: '60%',
                width: '60%',
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />
          </View>
        ) : (
          <Appbar.Content title="Title" titleStyle={{textAlign: 'center'}} />
        )}
        <View style={{width: 50, height: 50}} />
      </Appbar.Header>
      <CustomMenu
        menuPosition={menuPosition}
        isVisible={isMenuVisible}
        onDismiss={hideMenu}
        menuItems={[
          {
            leadingIcon: icons.reload,
            onPress: () => {},
            title: 'Actualizar Catálogos',
          },
          {
            leadingIcon: icons.logout,
            onPress: logout,
            title: 'Cerrar Sesión',
          },
        ]}
      />
    </>
  );
});
