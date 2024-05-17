import React from 'react';
import {View, Image} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {BaseScreen} from '../../theme/Template';
import {CustomButton, CustomInput} from '../../components';
import {useForm} from '../../hooks';
import {useAuthStore, useThemeStore} from '../../shared/hooks';
import { Button } from '../../components/shared';

let user = '';
let pass = '';

if (__DEV__) {
  user = 'xdecker@apptelink.com';
  pass = 'Xdecker123!';
}

export const LoginScreen = () => {
  const {
    auth: {status},
    signIn,
  } = useAuthStore();
  const {
    theme: {theme, themeInfo},
  } = useThemeStore();
  const navigation = useNavigation();

  const {userName, password, isFormValid, errors, onChange} = useForm(
    {
      userName: user,
      password: pass,
    },
    {
      userName: [value => value.includes('@'), 'Ingrese un correo válido'],
      password: [
        value => value.length >= 6,
        'El password debe tener más de 6 letras.',
      ],
    },
  );

  const Login = async () => {
    signIn(userName, password);
    /*  Keyboard.dismiss();
    console.log('login click');
    await signIn({userName, password}); */
  };

  return (
    <BaseScreen isScroll style={{ paddingHorizontal: 40, paddingTop: 70}}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{
          height: '30%',
          width: '60%',
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <CustomInput
        placeholder={'Usuario'}
        defaultValue={userName}
        keyboardType={'email-address'}
        errorCondition={!!errors.userName}
        errorMessage="Debe ingresar un usuario válido"
        getValue={value => onChange(value, 'userName')}
      />
      <CustomInput
        placeholder={'Contraseña'}
        secureTextEntry={true}
        defaultValue={password}
        errorCondition={!!errors.password}
        errorMessage="Debe ingresar su contraseña"
        getValue={value => onChange(value, 'password')}
      />
      <Button
        //fontWeight="bold"
        disabled={!isFormValid()}
        onPress={Login}
        text={'Iniciar Sesión'}
      />
      
    </BaseScreen>
  );
};
