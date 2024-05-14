import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {BaseScreen} from '../../Template';
import {CustomInput, CustomButton} from '../../components';
import {isValidEmail, isValidPassword} from '../../helpers';
import {useFillData} from '../../hooks';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  //const {signUp} = useContext(AuthContext);
  const {data, updateData} = useFillData({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
    fullName: '',
  });

  /* const register = async () =>
    await signUp(data).then(message =>
      Alert.show('default', {
        title: 'Exito',
        message,
        onPress: navigation.goBack,
      }),
    ); */

  const [isAllInfoComplete, setisAllInfoComplete] = useState(true);

  useEffect(() => {
    const CheckAllInfo =
      data.firstName.length >= 2 &&
      data.lastName.length >= 2 &&
      data.email.length >= 2 &&
      isValidEmail(data.email) &&
      isValidPassword(data.password) &&
      data.confirmPassword === data.password;
    setisAllInfoComplete(!CheckAllInfo);
  }, [data]);
  return (
    <BaseScreen isScroll>
      <CustomInput
        getValue={value => updateData(value, 'firstName')}
        placeholder="Nombre"
        errorCondition={data.firstName.length < 2}
        errorMessage="Su nombre debe tener 3 o más caracteres"
      />
      <CustomInput
        getValue={value => updateData(value, 'lastName')}
        placeholder="Apellido"
        errorCondition={data.lastName.length < 2}
        errorMessage="Su apellido debe tener 3 o más caracteres"
      />
      <CustomInput
        getValue={value => updateData(value, 'email')}
        keyboardType="email-address"
        placeholder="Correo"
        errorCondition={!isValidEmail(data.email)}
        errorMessage="Ingrese un correo válido"
      />
      <CustomInput
        getValue={value => updateData(value.trim(), 'password')}
        secureTextEntry
        placeholder="Contraseña"
        errorCondition={!isValidPassword(data.password)}
        errorMessage="Su contraseña debe tener almenos 6 caracteres"
      />
      <CustomInput
        getValue={value => updateData(value, 'confirmPassword')}
        secureTextEntry
        placeholder="Repetir Constraseña"
        errorCondition={data.confirmPassword !== data.password}
        errorMessage="Debe ser igual a la contraseña anterior"
      />
      <CustomButton
        disabled={isAllInfoComplete}
        onPress={() => {}}
        title={'Registrar Usuario'}
      />
    </BaseScreen>
  );
};
