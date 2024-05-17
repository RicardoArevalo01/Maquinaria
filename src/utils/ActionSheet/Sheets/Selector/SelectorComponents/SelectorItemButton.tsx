import React from 'react';
import {Text} from 'react-native-paper';
import {useThemeStore} from '../../../../../shared';
interface Props {
  title: string;
  onPress: () => void;
}
export const SelectorItemButton = ({title, onPress}: Props) => {
  const {
    theme: {theme, themeInfo},
  } = useThemeStore();
  return (
    <Text
      onPress={onPress}
      variant="titleLarge"
      style={{
        width: '100%',
        borderWidth: 0.3,
        borderColor: theme.colors.primaryContainer,
        textAlign: 'center',
        padding: 5,
        marginVertical: 2,
        borderRadius: 5,
        backgroundColor: theme.colors.elevation.level1,
      }}>
      {title}
    </Text>
  );
};
