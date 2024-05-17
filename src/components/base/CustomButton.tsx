import React, {memo, useCallback, useState} from 'react';
import {Button} from 'react-native-paper';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {useThemeStore} from '../../shared';

interface Props {
  onPress: (() => void) | (() => Promise<any>);
  title: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  type?: 'contained' | 'text' | 'outlined' | 'contained-tonal';
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  isLoading?: boolean;
  textColor?: string;
}

export const CustomButton = memo(
  ({
    onPress,
    title,
    icon,
    iconPosition = 'left',
    type = 'contained',
    style,
    contentStyle,
    labelStyle,
    disabled = false,
    textColor = undefined,
    isLoading,
  }: Props) => {
    const {
      theme: {theme, themeInfo},
    } = useThemeStore();

    return (
      <Button
        textColor={type === 'text' ? theme.colors.secondary : textColor}
        icon={icon}
        mode={type}
        onPress={onPress}
        style={{margin: 5, ...(style as any)}}
        loading={isLoading}
        disabled={isLoading ? true : disabled}
        labelStyle={{...(labelStyle as any), fontWeight: 'bold'}}
        contentStyle={{
          flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
          ...(contentStyle as any),
        }}>
        {title}
      </Button>
    );
  },
);
