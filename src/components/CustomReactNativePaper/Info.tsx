import React, {useContext} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {VariantProp} from 'react-native-paper/lib/typescript/components/Typography/types';
import {ThemeContext} from '../../context/ThemeContext';
import { fonts } from '../../theme/appFonts';

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
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{flexDirection: 'row', marginVertical: '0.5%', marginBottom: '0.5%'}}>
      <Text style={{
        color: theme.colors.onSurfaceVariant,
        fontSize: 9,
        fontFamily: fonts.semiBold,
      
      }} variant={variant}>{property}: </Text>
      <Text
        variant={variant}
        style={{color: infoTextColor ?? theme.colors.onSurface, fontSize: 9}}>
        {info}
      </Text>
    </View>
  );
};
