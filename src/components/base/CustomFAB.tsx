import React from 'react';
import {AnimatedFAB, IconButton} from 'react-native-paper';
import {CustomColors} from '../../theme';
import {useThemeStore} from '../../shared';

interface Props {
  icon: string;
  onPress: () => void;
  label: string;
}

export const CustomFAB = (props: Props) => {
  const {
    theme: {theme, themeInfo},
  } = useThemeStore();
  return (
    <>
      {props.label.length === 0 && props.icon.length !== 0 ? (
        <IconButton
          icon={props.icon}
          onPress={props.onPress}
          mode="contained-tonal"
          style={{
            bottom: 16,
            right: 16,
            position: 'absolute',
            backgroundColor: CustomColors.lightYellow,
            borderWidth: 0.5,
            borderColor: CustomColors.yellow,
          }}
          size={35}
        />
      ) : (
        <AnimatedFAB
          {...props}
          extended
          animateFrom={'right'}
          iconMode={'dynamic'}
          color={'#fff'}
          style={{
            bottom: 16,
            right: 16,
            position: 'absolute',
            backgroundColor: CustomColors.blue,
            borderWidth: 0.3,
            borderColor: theme.colors.onTertiaryContainer,
          }}
        />
      )}
    </>
  );
};
