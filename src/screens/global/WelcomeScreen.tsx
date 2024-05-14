import React, {useContext} from 'react';
import {Image, View} from 'react-native';

import {Text} from 'react-native-paper';
import {PermissionsContext} from '../../context';
import {BaseScreen} from '../../Template';
import {CustomButton} from '../../components';

export const WelcomeScreen = () => {
  const {askPermission} = useContext(PermissionsContext);
  return (
    <BaseScreen style={{justifyContent: 'center'}}>
      <Image
        source={require('../../assets/logo.png')}
        style={{
          height: '30%',
          width: '60%',
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text
        variant="bodyLarge"
        style={{
          textAlign: 'center',
          //color: colores.negro,

          maxWidth: 300,
          marginBottom: 30,
        }}>
        Por favor, permite acceder a tu ubicación, a la memoria interna y a la
        cámara de tu dispositivo para que tengas la mejor experiencia en la
        aplicación
      </Text>
      <CustomButton
        onPress={askPermission}
        title={'Dar permisos'}
        style={{minWidth: 180}}
      />
    </BaseScreen>
  );
};
