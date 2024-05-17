import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {VariantProp} from 'react-native-paper/lib/typescript/components/Typography/types';
import {useThemeStore} from '../../shared';

interface Props {
  property: string;
  info: string;
  infoTextColor?: string;
  variant?: VariantProp<never>;
}

export const Info = ({
  property,
  info,
  infoTextColor,
  variant = 'labelMedium',
}: Props) => {
  const {
    theme: {theme},
  } = useThemeStore();
  return (
    <View style={{flexDirection: 'row', marginVertical: '0.5%'}}>
      <Text variant={variant}>{property}: </Text>
      <Text
        variant={variant}
        style={{color: infoTextColor ?? theme.colors.onSurface}}>
        {info}
      </Text>
    </View>
  );
};
