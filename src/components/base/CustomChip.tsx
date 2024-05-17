import React, {memo} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Chip} from 'react-native-paper';

interface Props {
  selected?: boolean;
  onPress: () => void;
  title: string;
  icon?: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

export const CustomChip = memo((props: Props) => {
  return (
    <Chip
      textStyle={{...(props.textStyle as any)}}
      style={{margin: 5, ...(props.style as any)}}
      {...props}
      showSelectedOverlay>
      {props.title}
    </Chip>
  );
});
