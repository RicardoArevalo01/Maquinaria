import React, {useContext} from 'react';
import {View, Keyboard, Image} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {BaseScreen} from '../../Template';
import { CustomInput} from '../../components';
import {AuthContext, ThemeContext} from '../../context';
import {useForm} from '../../hooks';
import { Button } from '../../components/shared';

let user = '';
let pass = '';

if (__DEV__) {
  user = 'xdecker@apptelink.com';
  pass = 'Xdecker123!';
}

export const LoginScreen = () => {
  const {signIn} = useContext(AuthContext);
  const {theme, themeInfo} = useContext(ThemeContext);
  const navigation = useNavigation();

  const {password, onChange, userName, pepito} = useForm({
    userName: user,
    password: pass,
    pepito: 'pepito',
  });

  const Login = async () => {
    Keyboard.dismiss();
    console.log('login click');
    await signIn({userName, password});
  };

  return (
    <BaseScreen style={{alignItems: 'center', padding: 40}}>
      <Image
        source={require('../../assets/logo.png')}
        style={{
          height: '30%',
          width: '60%',
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <CustomInput
        placeholder={'Usuario'}
        defaultValue={pepito}
        keyboardType={'email-address'}
        errorCondition={userName.length < 3}
        errorMessage="Debe ingresar un usuario válido"
        getValue={value => onChange(value, 'userName')}
      />
      <CustomInput
        placeholder={'Contraseña'}
        secureTextEntry={true}
        defaultValue={password}
        errorCondition={password.length < 2}
        errorMessage="Debe ingresar su contraseña"
        getValue={value => onChange(value, 'password')}
      />
      <Button
        //fontWeight="bold"
        disabled={userName.length < 3 || password.length < 8}
        onPress={Login}
        style={{width: '60%', marginTop: '4%'}}
        text={'Iniciar Sesión'}
      />
      <View
        style={{
          alignSelf: 'flex-end',
          alignItems: 'flex-end',
        }}>
        {/* <Button
          type="text"
          //fontWeight="normal"
          title={'Olvidé Contraseña'}
          style={{marginVertical: 0.5}}
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate('RecoveryPasswordScreen'),
            )
          }
        /> */}
      </View>
    </BaseScreen>
  );
};
