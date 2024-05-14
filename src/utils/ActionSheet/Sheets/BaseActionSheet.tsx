import React, {useContext} from 'react';
import {
  KeyboardAvoidingView,
  StyleProp,
  View,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {ThemeContext} from '../../../context';

interface Props {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  containerSstyle?: StyleProp<ViewStyle>;
  id: string;
}

export const BaseActionSheet = ({
  children,
  style,
  containerSstyle,
  id,
}: Props) => {
  const {height} = useWindowDimensions();
  const {theme} = useContext(ThemeContext);
  return (
    <ActionSheet
      id={id}
      //safeAreaInsets={insets}
      useBottomSafeAreaPadding
      gestureEnabled
      closable
      indicatorStyle={{backgroundColor: theme.colors.elevation.level5}}
      containerStyle={{
        backgroundColor: theme.colors.background,
        minHeight: 150,
        //paddingBottom: 25,
        ...(containerSstyle as any),
      }}>
      <KeyboardAvoidingView
        style={{
          alignItems: 'center',
          padding: '1%',
          maxHeight: height * 0.8,
          backgroundColor: theme.colors.background,
          //backgroundColor: 'red',
          ...(style as any),
        }}>
        {children}
      </KeyboardAvoidingView>
    </ActionSheet>
  );
};
