import React from 'react';
import {DialogBase, BaseDialogProps} from '../DialogComponents/DialogBase';
import {DialogButton} from '../DialogComponents/DialogButton';
import {Dialog} from 'react-native-paper';

interface Props extends BaseDialogProps {
  options: {title: string; onPress: () => void}[];
}

export const AlertMultiOptions = ({
  visible,
  onDismiss,
  title,
  message,
  icon,
  iconColor,
  options,
}: Props) => {
  return (
    <DialogBase
      visible={visible}
      onDismiss={onDismiss}
      title={title}
      message={message}
      icon={icon}
      iconColor={iconColor}
      buttonsChilren={
        <Dialog.Content style={{alignItems: 'flex-end'}}>
          {options.map(({title, onPress}, index) => (
            <DialogButton
              key={index}
              title={title}
              onPress={() => {
                onPress();
                onDismiss();
              }}></DialogButton>
          ))}
          <DialogButton onPress={onDismiss} title={'Cancelar'}></DialogButton>
        </Dialog.Content>
      }></DialogBase>
  );
};
