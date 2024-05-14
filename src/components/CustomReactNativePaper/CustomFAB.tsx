import React, {useContext, useEffect, useState} from 'react';
import {AnimatedFAB, IconButton} from 'react-native-paper';
import {CustomColors} from '../../theme/appColors';
import {ThemeContext} from '../../context/ThemeContext';
import { sleep } from '../../helpers';

interface Props {
  icon: string;
  label: string;
  color?: string;
  contract?: boolean;
  animationTime?: number;
  
  onPress: () => void;
  onLongPress?: () => void;
}

export const CustomFAB = ({
  icon,
  label,
  color,
  contract = false,
  animationTime,
  
  onPress,
  onLongPress,
}: Props) => {
  const {theme} = useContext(ThemeContext);
  const [contractFab, setContractFab] = useState(false);
  const [extendedFab, setExtendedFab] = useState(false);

  return (
    <>
      {label.length === 0 && icon.length !== 0 ? (
        <IconButton
          icon={icon}
          onPress={onPress}
          onLongPress={onLongPress}
          mode="contained-tonal"
          style={{
            bottom: 16,
            right: 16,
            position: 'absolute',
            backgroundColor: CustomColors.lightYellow,
          }}
          size={35}
        />
      ) : (
        <AnimatedFAB
          icon={icon}
          label={label}
          extended
          onPress={onPress}
          onLongPress={onLongPress}
          animateFrom={'right'}
          iconMode={'static'}
          color={'#fff'}
          style={{
            bottom: 16,
            right: 10,
            position: 'absolute',
            backgroundColor: theme.colors.primary,
  
          }}
        
        />
      )}
    </>
  );
};

