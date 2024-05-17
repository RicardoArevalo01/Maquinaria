import React, {memo, useEffect, useState} from 'react';
import {View} from 'react-native';
import {RadioButton, Switch, Text} from 'react-native-paper';

interface Props {
  title: string;
  getValue: (value: boolean) => void;
  defaultValue?: boolean;
  type?: 'RadioButton' | 'Switch';
}

export const CustomBoolean = memo(
  ({title, getValue, defaultValue = false, type = 'RadioButton'}: Props) => {
    const [value, setValue] = useState(defaultValue);
    useEffect(() => {
      getValue(value);
    }, [value]);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          width: '100%',
        }}>
        <Text>{title}</Text>
        {{
          RadioButton: (
            <RadioButton
              value={value ? 'checked' : 'uncheked'}
              status={value ? 'checked' : 'unchecked'}
              onPress={() => {
                setValue(!value);
              }}
            />
          ),
          Switch: (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text>No</Text>
              <Switch
                style={{marginHorizontal: 5}}
                value={value}
                onValueChange={setValue}
              />
              <Text>Si</Text>
            </View>
          ),
        }[type] || <></>}
      </View>
    );
  },
);
