import React, {useState} from 'react';
import {Button} from 'react-native-paper';

interface Props {
  onPress: (() => void) | (() => Promise<void>);
  textColor?: string;
  title: string;
  disabled?: boolean;
}

export const DialogButton = ({
  onPress,
  textColor,
  title = '',
  disabled,
}: Props) => {
  return (
    <Button onPress={onPress} disabled={disabled} textColor={textColor}>
      {title}
    </Button>
  );
};
