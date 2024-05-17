import React, {useEffect} from 'react';
import {Text} from 'react-native-paper';

import {BaseScreen} from '../../theme/Template';
import {CustomInput, CustomButton} from '../../components';
import {isValidPassword} from '../../helpers';
import {icons} from '../../theme';
import {useForm} from '../../hooks';

export const ResetPasswordScreen = () => {
  const {
    prevPassword,
    currentPassword,
    currentPasswordChek,
    onChange,
    errors,
    isFormValid,
  } = useForm(
    {
      prevPassword: '',
      currentPassword: '',
      currentPasswordChek: '',
    },
    {
      prevPassword: [
        value => value.length >= 3,
        'Ingrese su contraseña actual',
      ],
      currentPassword: [
        value => isValidPassword(value),
        'Su contraseña debe tener mayusculas, minusculas, números y simbolos',
      ],
      currentPasswordChek: [
        value => isValidPassword(value),
        'repita su nueva contraseña',
      ],
    },
  );

  useEffect(() => {
    console.log({prevPassword});
  }, [prevPassword]);

  return (
    <BaseScreen style={{justifyContent: 'center'}}>
      <Text
        variant="headlineSmall"
        style={{maxWidth: '80%', textAlign: 'center', marginBottom: 20}}>
        Cambiar contraseña
      </Text>
      <CustomInput
        defaultValue={prevPassword}
        getValue={value => onChange(value, 'prevPassword')}
        placeholder="Ingrese su contraseña actual "
        secureTextEntry
        errorCondition={!!errors.prevPassword}
        errorMessage={errors.prevPassword}
      />
      <CustomInput
        defaultValue={currentPassword}
        getValue={value => onChange(value, 'currentPassword')}
        placeholder="Ingrese su nueva contraseña"
        secureTextEntry
        errorCondition={!!errors.currentPassword}
        errorMessage={errors.currentPassword}
      />
      <CustomInput
        defaultValue={currentPassword}
        getValue={value => onChange(value, 'currentPasswordChek')}
        placeholder="repita su nueva contraseña"
        secureTextEntry
        errorCondition={!!errors.currentPasswordChek}
        errorMessage={errors.currentPasswordChek}
      />
      <CustomButton
        onPress={() => {}}
        title={'Cambiar contraseña'}
        icon={icons.reloadPassword}
        disabled={!isFormValid() && currentPassword !== currentPasswordChek}
      />
    </BaseScreen>
  );
};
