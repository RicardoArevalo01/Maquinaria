import React, {memo, useCallback, useContext, useState} from 'react';
import {Button} from 'react-native-paper';
import {ThemeContext} from '../../context/ThemeContext';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Loader} from '../../utils/Loader/Loader';
import { fonts } from '../../theme/appFonts';
import { lightenColor } from '../../helpers/lightenColor';

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
  textColor?: string;
  showLoadingModal?: boolean;
  flexGrow?: number;
  color?: string;
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
    showLoadingModal = false,
    color,
    flexGrow = 1,
  }: Props) => {
    const [isLoading, setisLoading] = useState(false);
    const {theme} = useContext(ThemeContext);

    const memoizedonPressButton = useCallback(async () => {
      if (showLoadingModal) {
        await Loader.show()
          .then(async () => await onPress())
          .catch()
          .finally(
            async () => await Loader.hide().then(() => setisLoading(false)),
          );
      } else {
        setisLoading(true);
        await onPress();
        setisLoading(false);
      }
    }, []);

    return (
      <Button
        icon={icon}
        mode={type}
        buttonColor={color ? color : theme.colors.primary}
        onPress={memoizedonPressButton}
        style={[
          {
            margin: 5,
          },
          type === 'contained-tonal' && {backgroundColor: color ? lightenColor(color, 0.8) : lightenColor(theme.colors.primary, 0.8)},
          type === 'text' && {backgroundColor: 'transparent'},
          type === 'outlined' && {
            borderColor: color ? color : theme.colors.primary,
            backgroundColor: 'transparent',
          },
          style,
        ]}
        loading={isLoading}
        disabled={isLoading ? true : disabled}
        labelStyle={[ 
          {
            fontFamily: fonts.semiBold
          },
          type === 'contained-tonal' && {color: color ? color : theme.colors.primary},
          type === 'text' && {color: color ? color : theme.colors.primary},
          type === 'outlined' && {color: color ? color : theme.colors.primary},
          textColor ? {color: textColor} : undefined,
        ]}
        contentStyle={[
          {flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
          ...(contentStyle as any),
          },
        ]}>
        {title}
      </Button>
    );
  },
);
