import React, {useContext} from 'react';
import {Keyboard, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {BaseScreen} from '../../Template';
import {CustomInput, CustomButton} from '../../components';
import {ThemeContext} from '../../context';
import {isValidEmail} from '../../helpers';
import {useForm} from '../../hooks';
import {icons} from '../../theme/appTheme';

export const RecoveryPasswordScreen = () => {
  const {email, onChange} = useForm({
    email: '',
  });
  const navigation = useNavigation();
  const {themeInfo} = useContext(ThemeContext);

  const RecoveryAccount = async () => {
    Keyboard.dismiss();
    /*  await forgotPassword(email).then(message =>
      Alert.show('default', {
        title: 'Exito',
        message,
        onPress: navigation.goBack,
      }),
    ); */
  };

  return (
    <BaseScreen style={{justifyContent: 'center'}}>
      <View style={{width: '90%'}}>
        <View style={{alignItems: 'center'}}>
          <Text
            variant="titleLarge"
            style={{textAlign: 'center', fontWeight: '700', lineHeight: 24}}>
            ¿Olvidáste tu Contraseña? {'\n'} No te preocupes
          </Text>
          <Text
            style={{
              marginVertical: '2%',
              textAlign: 'center',
              marginHorizontal: '1%',
            }}>
            Danos tu correo y te enviaremos una contraseña para que puedas
            acceder. Te recomendamos que en cuanto ingreses cambies tu
            contraseña
          </Text>
        </View>

        <CustomInput
          placeholder={'Ingrese su correo'}
          defaultValue={email}
          keyboardType={'email-address'}
          errorCondition={!isValidEmail(email)}
          errorMessage="Debe ingresar un correo válido"
          getValue={value => onChange(value, 'email')}></CustomInput>
      </View>

      <CustomButton
        //fontWeight="bold"
        disabled={!isValidEmail(email)}
        onPress={RecoveryAccount}
        icon={icons.reload}
        textColor={themeInfo.isDarkTheme ? 'white' : ''}
        style={{marginTop: '4%'}}
        title={'Recuperar Contraseña'}></CustomButton>
    </BaseScreen>
  );
};
