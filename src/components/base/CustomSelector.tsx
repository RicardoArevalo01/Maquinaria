import React, {memo, useState} from 'react';
import {icons} from '../../theme';
import {StyleProp, ViewStyle} from 'react-native';
import {CustomInput} from './CustomInput';
import {SheetManager} from 'react-native-actions-sheet';

interface Props<T> {
  catalog: T[];
  type?: 'single' | 'multiple';
  getResult: (result: T | T[]) => void;
  defaultValue?: string;
  keyProperty: keyof T;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  onAddPress?: (value: any) => void;
  isRequired?: boolean;
}

interface Item {
  key: string;
  value: string;
  disabled?: boolean;
}

export const CustomSelector = memo(
  <T extends Record<string, any>>({
    type = 'single',
    getResult,
    catalog,
    defaultValue = '',
    keyProperty,
    placeholder = '',
    style,
    onAddPress,
    isRequired = false,
  }: Props<T>) => {
    const [textResult, settextResult] = useState('');
    return (
      <CustomInput
        style={style}
        editable={false}
        defaultValue={textResult}
        getValue={() => {}}
        placeholder={`Seleccionar ${placeholder}`}
        iconPosition="right"
        icon={icons.down}
        onIconPress={async () =>
          await SheetManager.show('selector', {
            payload: {
              items: catalog,
              keyProperty: keyProperty as string,
              title: placeholder,
            },
          }).then(value => {
            if (value) {
              console.log(value);
              settextResult(value[keyProperty]);
              getResult(value as T | T[]);
            }
          })
        }
      />
    );
  },
);
