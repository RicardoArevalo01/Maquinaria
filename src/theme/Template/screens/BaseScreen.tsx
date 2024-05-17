import React, {useEffect} from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {useAnimation} from '../../../hooks/useAnimation';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';
import {useThemeStore} from '../../../shared';
interface Props {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  isScroll?: boolean;
}
export const BaseScreen = ({children, style = {}, isScroll = false}: Props) => {
  const {
    theme: {theme},
  } = useThemeStore();
  const isFocused = useIsFocused();
  const {fadeIn, opacity} = useAnimation();
  useEffect(() => {
    if (!isFocused) opacity.setValue(0);
    else fadeIn(0);
  }, [isFocused]);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      
        {isScroll ? (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            automaticallyAdjustKeyboardInsets
            contentContainerStyle={{
              alignItems: 'center',
              flexGrow: 1,
              padding: 0,
              backgroundColor: theme.colors.background,
              ...(style as any),
            }}>
            {children}
          </ScrollView>
        ) : (
          <KeyboardAvoidingView
            behavior="padding"
            style={{
              alignItems: 'center',
              flexGrow: 1,
              paddingHorizontal: 0,
              backgroundColor: theme.colors.background,
              ...(style as any),
            }}>
            {children}
          </KeyboardAvoidingView>
        )}
    </GestureHandlerRootView>
  );
};
