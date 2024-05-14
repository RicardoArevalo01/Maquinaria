import React, {useState} from 'react';
import { StyleProp, TextStyle } from 'react-native';
import {Button} from 'react-native-paper';
import { fonts } from '../../../theme/appFonts';

interface Props {
  onPress: (() => void) | (() => Promise<void>);
  textColor?: string;
  title: string;
  disabled?: boolean;
  
  labelStyle?: StyleProp<TextStyle>;
}

export const DialogButton = ({
  onPress,
  textColor,
  title = '',
  disabled,
  
  labelStyle,
}: Props) => {
  return (
    <Button onPress={onPress} disabled={disabled} textColor={textColor} labelStyle={{fontFamily: fonts.regular , ...(labelStyle as any)}}>
      {title}
    </Button>
  );
};
