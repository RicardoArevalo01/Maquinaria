import React, {memo, useEffect, useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {icons, CustomColors} from '../../theme';
import {useThemeStore} from '../../shared';

interface Props {
  color?: string;
  defaultValue?: string;
  editable?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  style?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  placeholder?: string;
  getValue: (value: string) => void;
  showTextLength?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  onIconPress?: () => void;
  errorCondition?: boolean;
  errorMessage?: string;
  multilne?: boolean;
  disable?: boolean;
  isRequired?: boolean;
}

export const CustomInput = memo(
  ({
    placeholder,
    editable = true,
    keyboardType = 'default',
    maxLength = 100,
    secureTextEntry = false,
    showTextLength = false,
    style,
    viewStyle,
    icon = '',
    errorCondition = false,
    multilne = false,
    errorMessage,
    getValue,
    defaultValue = '',
    onIconPress = () => {},
    iconPosition = 'left',
    disable,
    isRequired = false,
  }: Props) => {
    const {
      theme: {theme},
    } = useThemeStore();
    const [isPasswordSecure, setisPasswordSecure] = useState(secureTextEntry);
    const [value, setvalue] = useState(defaultValue);

    useEffect(() => {
      getValue(value);
    }, [value]);

    useEffect(() => {
      setvalue(defaultValue);
      console.log({defaultValue});
    }, [defaultValue]);

    return (
      <View style={{marginVertical: 5, width: '100%', ...(viewStyle as any)}}>
        {isRequired && (
          <HelperText type="error" padding="normal" visible={true}>
            {`* Campo Requerido`}
          </HelperText>
        )}
        <TextInput
          maxLength={multilne ? 1000 : maxLength}
          keyboardType={keyboardType}
          autoCapitalize={
            keyboardType === 'email-address' ? 'none' : 'sentences'
          }
          editable={editable}
          multiline={multilne}
          disabled={disable}
          style={{
            backgroundColor: disable
              ? CustomColors.lightGrey
              : theme.colors.elevation.level2,
            minHeight: multilne ? 150 : undefined,
            marginBottom: 5,
            padding:0,
            margin: 0,
            width: '100%',
            ...(style as any),
          }}
          mode="outlined"
          theme={{roundness: 10}}
          contentStyle={{padding:0}}
          outlineStyle={{borderRadius: 10, borderWidth: 0}}
          textColor={theme.colors.onBackground}
          label={placeholder}
          value={value}
          onChangeText={setvalue}
          secureTextEntry={isPasswordSecure}
          outlineColor="transparent"
          right={
            secureTextEntry ? (
              <TextInput.Icon
                icon={isPasswordSecure ? icons.eyeOpen : icons.eyeClose}
                onPress={() => setisPasswordSecure(!isPasswordSecure)}
                forceTextInputFocus={false}
              />
            ) : showTextLength ? (
              <TextInput.Affix text={`${value.length}/${maxLength}`} />
            ) : icon.length !== 0 && iconPosition === 'right' ? (
              <TextInput.Icon
                icon={icon}
                forceTextInputFocus={false}
                onPress={onIconPress}
              />
            ) : undefined
          }
          left={
            icon.length > 0 && iconPosition === 'left' ? (
              <TextInput.Icon
                icon={icon}
                forceTextInputFocus={false}
                onPress={onIconPress}
              />
            ) : undefined
          }
        />
        {errorCondition && (
          <HelperText type="error" padding="normal" visible={true}>
            {errorMessage}
          </HelperText>
        )}
      </View>
    );
  },
);
