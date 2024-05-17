import React from 'react';
import {BaseScreen} from '../../theme/';
import {CustomInput, CustomButton} from '../../components';
import {isValidEmail, isValidPassword} from '../../helpers';
import {useForm} from '../../hooks';

export const RegisterScreen = () => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    onChange,
    isFormValid,
    errors,
  } = useForm(
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    {
      firstName: [
        value => value.length >= 2,
        'Su nombre debe tener 3 o más caracteres',
      ],
      lastName: [
        value => value.length >= 2,
        'Su apellido debe tener 3 o más caracteres',
      ],
      email: [value => isValidEmail(value), 'Ingrese un correo válido'],
      password: [
        value => isValidPassword(value),
        'Su contraseña debe tener almenos 6 caracteres',
      ],
      confirmPassword: [value => isValidPassword(value), '_'],
    },
  );

  /* const register = async () =>
    await signUp(data).then(message =>
      Alert.show('default', {
        title: 'Exito',
        message,
        onPress: navigation.goBack,
      }),
    ); */

  return (
    <BaseScreen isScroll>
      <CustomInput
        defaultValue={firstName}
        getValue={value => onChange(value, 'firstName')}
        placeholder="Nombre"
        errorCondition={!!errors.firstName}
        errorMessage={errors.firstName}
      />
      <CustomInput
        defaultValue={lastName}
        getValue={value => onChange(value, 'lastName')}
        placeholder="Apellido"
        errorCondition={!!errors.lastName}
        errorMessage={errors.lastName}
      />
      <CustomInput
        defaultValue={email}
        getValue={value => onChange(value, 'email')}
        keyboardType="email-address"
        placeholder="Correo"
        errorCondition={!!errors.email}
        errorMessage={errors.email}
      />
      <CustomInput
        defaultValue={password}
        getValue={value => onChange(value.trim(), 'password')}
        secureTextEntry
        placeholder="Contraseña"
        errorCondition={!!errors.password}
        errorMessage={errors.password}
      />
      <CustomInput
        defaultValue={confirmPassword}
        getValue={value => onChange(value, 'confirmPassword')}
        secureTextEntry
        placeholder="Repetir Constraseña"
        errorCondition={!!errors.confirmPassword}
        errorMessage={'Debe ser igual a la contraseña anterior'}
      />
      <CustomButton
        disabled={!isFormValid() && password !== confirmPassword}
        onPress={() => {}}
        title={'Registrar Usuario'}
      />
    </BaseScreen>
  );
};
