import React, {useContext} from 'react';
import {Modal, SafeAreaView, StyleProp, View, ViewStyle} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

export interface BaseModalProps {
  CloseFunction: () => void;
  isVisible: boolean;
}

interface Props extends BaseModalProps {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  animationType?: 'none' | 'slide' | 'fade';
  isAlert?: boolean;
}

export const BaseModal = ({
  children,
  style,
  CloseFunction,
  isVisible = false,
  animationType = 'slide',
  isAlert = false,
}: Props) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType={animationType}
      onRequestClose={() => (isAlert ? {} : CloseFunction())}>
      <SafeAreaView
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          //padding: 5,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          ...(style as any),
        }}>
        {children}
      </SafeAreaView>
    </Modal>
  );
};
