import React, { useEffect, useRef } from 'react';
import { Input } from '@ui-kitten/components';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../../theme/globals';

interface Props {
  label?: string
  placeholder?: string
  value?: string 
  icon?: string
  iconAlign?: 'left' | 'right'
  caption?: string
  size?: string
  disabled?: boolean
  status?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'control'
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad'
  password?: boolean

  returnValue?: (value: string) => void
}

export const InputText = ( {
  label,
  placeholder,
  value = '',
  icon,
  iconAlign = 'left',
  caption,
  size = 'medium',
  disabled,
  status = 'basic',
  keyboardType = 'default',
  password = false,

  returnValue,
}:Props ): React.ReactElement => {

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [valueinput, setValueInput] = React.useState(value);
  const [focus, setFocus] = React.useState(false);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  }

  const handleInputValue = (value: string) => {
    setValueInput(value); 
  }

  useEffect(() => {
    returnValue ? returnValue(valueinput) : null;
  }, [valueinput]);

  return (
    <Input
      label={label}
      style={[
        {
          borderRadius: 10,
          backgroundColor: colors.light,
          borderColor: colors.lightgrey, 
        },
        {
          ...focus && { 
            borderColor: colors.lightgrey, 
            borderWidth: 1,
            backgroundColor: colors.light
          }
        }
      ]}
      placeholder={placeholder}
      value={value || valueinput}
      size={size}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      caption={caption}
      disabled={disabled}
      onChangeText={(e) => handleInputValue(e)}
      status={status}
      keyboardType={keyboardType} 
      secureTextEntry={password && secureTextEntry}
      {
        ...
        (icon && iconAlign === 'left') ? 
        { accessoryLeft: <Icon name={icon} size={24} color={colors.grey} /> } :
        {}
      }
      {
        ...
        (icon && iconAlign === 'right') ?
        { accessoryRight: <Icon name={icon} size={24}/> } : 
        (iconAlign !== 'right' && password) ?
        { accessoryRight: 
          <TouchableWithoutFeedback onPress={()=> toggleSecureEntry}>
            <Icon 
              name={secureTextEntry ? 'visibility-off' : 'visibility'} 
              size={24} 
              color={colors.grey}
              onPress={()=> setSecureTextEntry(!secureTextEntry)}/>
          </TouchableWithoutFeedback> } :
        {}
      }
    />
  );
};