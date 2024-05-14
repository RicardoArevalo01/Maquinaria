import React, {useContext} from 'react';
import {Text} from 'react-native-paper';
import {ThemeContext} from '../../../../../context';
interface Props {
  title: string;
  onPress: () => void;
}
export const SelectorItemButton = ({title, onPress}: Props) => {
  const {theme} = useContext(ThemeContext);
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
