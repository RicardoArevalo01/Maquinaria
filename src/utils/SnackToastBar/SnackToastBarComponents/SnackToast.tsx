import React, {useState} from 'react';
import {Snackbar} from 'react-native-paper';

interface Props {
  title: string;
  visible: boolean;
  label?: string;
  onDismiss: () => void;
  onPress?: () => Promise<void>;
}

export const SnackToast = ({
  title,
  visible,
  onDismiss,
  onPress = async () => {},
  label = '',
}: Props) => {
  return (
    <Snackbar
      style={{zIndex: 10, bottom: 10}}
      visible={visible}
      onDismiss={onDismiss}
      duration={3000}
      action={{
        label,
        onPress: async () => await onPress().then(onDismiss),
      }}>
      {title}
    </Snackbar>
  );
};
