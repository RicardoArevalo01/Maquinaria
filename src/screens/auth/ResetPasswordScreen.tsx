import React, {useContext} from 'react';
import {Text} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context';
import {BaseScreen} from '../../Template';
import {CustomInput, CustomButton} from '../../components';
import {isValidPassword} from '../../helpers';
import {useFillData} from '../../hooks';
import {icons} from '../../theme/appTheme';

export const ResetPasswordScreen = () => {
  const {JWTInfo} = useContext(AuthContext);
  const navigation = useNavigation();
  const {data, updateData} = useFillData({
    prevPassword: '',
    currentPassword: '',
    currentPasswordChek: '',
  });
  return (
    <BaseScreen style={{justifyContent: 'center'}}>
      <Text
        variant="headlineSmall"
        style={{maxWidth: '80%', textAlign: 'center', marginBottom: 20}}>
        Cambiar contraseña
      </Text>
      <CustomInput
        getValue={value => updateData(value, 'prevPassword')}
        placeholder="Ingrese su contraseña actual "
        secureTextEntry
        errorCondition={data.prevPassword.length < 3}
        errorMessage="Ingrese su contraseña actual"
      />
      <CustomInput
        getValue={value => updateData(value, 'currentPassword')}
        placeholder="Ingrese su nueva contraseña"
        secureTextEntry
        errorCondition={!isValidPassword(data.currentPassword)}
        errorMessage="Su contraseña debe tener mayusculas, minusculas, números y simbolos"
      />
      <CustomInput
        getValue={value => updateData(value, 'currentPasswordChek')}
        placeholder="repita su nueva contraseña"
        secureTextEntry
        errorCondition={data.currentPassword !== data.currentPasswordChek}
        errorMessage="Ingrese su contraseña actual"
      />
      <CustomButton
        onPress={() => {}}
        title={'Cambiar contraseña'}
        icon={icons.reloadPassword}
        disabled={
          data.prevPassword.length < 3 ||
          !isValidPassword(data.currentPassword) ||
          data.currentPassword !== data.currentPasswordChek
        }
      />
    </BaseScreen>
  );
};
