import React from 'react';
import {BaseScreen} from '../Template';
import { Text } from 'react-native';
import { fonts } from '../theme/appFonts';
import { HeaderTitle } from '../components/shared';

export const ProfileScreen = () => {
  return (
    <BaseScreen
      style={{
        alignItems: 'flex-start',
      }}
    >
      <HeaderTitle 
          text="Mi Perfil"
        />
    </BaseScreen>
  );
};
