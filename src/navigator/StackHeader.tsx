import React, {memo, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import {Image, View} from 'react-native';
import {icons} from '../theme/appTheme';
import {CustomColors} from '../theme/appColors';
import {AuthContext, ThemeContext} from '../context';
import {Alert} from '../utils';
import {CustomMenu, useCustomMenu} from '../components';

interface Props {
  title?: string;
  backButton?: boolean;
}

export const StackHeader = memo(({title = '', backButton = false}: Props) => {
  const {logOut} = useContext(AuthContext);
  const navigation = useNavigation();
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
        }}
        elevated>
        {backButton && (
          <Appbar.Action icon={icons.back} onPress={navigation.goBack} />
        )}
        {title.length === 0 ? (
          <Image
            source={require('../assets/banner.png')}
            style={{
              height: '60%',
              width: '60%',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        ) : (
          <Appbar.Content
            title={title}
            titleStyle={{
              textAlign: backButton ? 'center' : 'left',
              fontSize: 17,
            }}
          />
        )}
        <View style={{width: 50, height: 50}} />
      </Appbar.Header>
      <CustomMenu
        menuPosition={menuPosition}
        isVisible={isMenuVisible}
        onDismiss={hideMenu}
        menuItems={[
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
