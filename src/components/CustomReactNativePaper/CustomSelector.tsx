import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  MultipleSelectList,
  SelectList,
} from 'react-native-dropdown-select-list';
import {ThemeContext} from '../../context/ThemeContext';
import {
  Card,
  Dialog,
  HelperText,
  Icon,
  IconButton,
  Text,
} from 'react-native-paper';
import {icons} from '../../theme/appTheme';
import {CustomColors} from '../../theme/appColors';
import {StyleProp, View, ViewStyle} from 'react-native';
import {DialogBase} from '../../utils/Dialog/DialogComponents/DialogBase';
import {CustomInput} from './CustomInput';
import {DialogButton} from '../../utils/Dialog/DialogComponents/DialogButton';
import {useFillData} from '../../hooks/useFillData';

export interface BaseInfo {
  name: string;
  description: string;
}

interface Props<T> {
  catalog: T[];
  type: 'single' | 'multiple';
  getResult: (result: T | T[]) => void;
  defaultValue?: string;
  keyProperty: keyof T;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  onAddPress?: (value: BaseInfo) => void;
  errorCondition?: boolean;
}

interface Item {
  key: string;
  value: string;
  disabled?: boolean;
}

export const CustomSelector = <T extends Record<string, any>>({
  type,
  getResult,
  catalog,
  defaultValue,
  keyProperty,
  placeholder,
  style,
  onAddPress,
  errorCondition,
}: Props<T>) => {
  const [dialogVisible, setdialogVisible] = useState(false);
  const {data, updateData} = useFillData<BaseInfo>({name: '', description: ''});
  const {theme, themeInfo} = useContext(ThemeContext);
  const [items, setItems] = useState<Item[]>([]);
  const [selected, setselected] = useState<string[]>([]);

  useEffect(() => {
    setItems(
      catalog.map((item, index) => ({
        key: index.toString(),
        value: item[keyProperty].toString(),
      })),
    );
  }, [catalog, keyProperty]);

  const handleResult = (selected: string | string[]) => {
    const selectedValues = Array.isArray(selected) ? selected : [selected];
    const result = catalog.filter(item =>
      selectedValues.includes(item[keyProperty].toString()),
    );
    getResult(type === 'single' ? result[0] : result);
  };

  const fontStyle = {
    ...theme.fonts.bodyLarge,
    color: theme.colors.onSurfaceVariant,
  };

  return (
    <>
      <Card
        mode="contained"
        style={{
          padding: 5,
          marginVertical: 5,
          minWidth: '100%',
          backgroundColor: 'white',
          borderWidth: 0.3,
          borderColor: theme.colors.primary,
        }}>
        {type === 'single' && (
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Arial-Medium',
              paddingBottom: '1%',
            }}>
            {placeholder}
          </Text>
        )}
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: onAddPress ? '2%' : undefined,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: onAddPress === undefined ? '95%' : '85%'}}>
            {type === 'single' ? (
              <SelectList
                data={items}
                boxStyles={{
                  //width: '100%',
                  borderWidth: 0.3,

                  borderColor: theme.colors.secondary,
                  backgroundColor: themeInfo.isDarkTheme
                    ? theme.colors.elevation.level2
                    : CustomColors.lightGrey,
                  borderRadius: 10,
                  ...(style as any),
                }}
                searchPlaceholder={'buscar'}
                arrowicon={<Icon size={25} source={icons.down} />}
                searchicon={<Icon size={25} source={icons.search} />}
                closeicon={<Icon size={25} source={icons.close} />}
                inputStyles={fontStyle}
                dropdownTextStyles={fontStyle}
                dropdownStyles={{
                  borderColor: theme.colors.elevation.level2,
                  backgroundColor: themeInfo.isDarkTheme
                    ? theme.colors.elevation.level2
                    : CustomColors.lightGrey,
                }}
                disabledTextStyles={fontStyle}
                disabledItemStyles={{
                  backgroundColor: theme.colors.elevation.level2,
                }}
                setSelected={handleResult}
                placeholder={`Seleccionar ${placeholder}`}
                save="value"
                defaultOption={items.find(
                  item => item.value === defaultValue ?? '',
                )}
              />
            ) : (
              <MultipleSelectList
                data={items}
                boxStyles={{
                  width: '100%',
                  minWidth: '100%',
                  borderColor: 'transparent',
                  backgroundColor: theme.colors.elevation.level2,
                  borderRadius: 25,
                  marginVertical: 5,
                  ...(style as any),
                }}
                arrowicon={<Icon size={25} source={icons.down} />}
                searchicon={<Icon size={25} source={icons.search} />}
                closeicon={<Icon size={25} source={icons.close} />}
                inputStyles={fontStyle}
                dropdownTextStyles={fontStyle}
                dropdownStyles={{borderColor: theme.colors.elevation.level2}}
                disabledTextStyles={fontStyle}
                disabledItemStyles={{
                  backgroundColor: theme.colors.elevation.level2,
                }}
                checkBoxStyles={{
                  backgroundColor: theme.colors.onSurfaceVariant,
                }}
                labelStyles={fontStyle}
                badgeStyles={{backgroundColor: theme.colors.onSurfaceVariant}}
                setSelected={setselected}
                onSelect={() => {
                  console.log(selected), handleResult(selected);
                }}
                fontFamily="Arial-Rounded"
                placeholder={`Seleccionar ${placeholder}`}
                save="value"
                label={placeholder}
              />
            )}
          </View>
          {onAddPress && (
            <IconButton
              icon={'plus'}
              style={{backgroundColor: theme.colors.primary}}
              iconColor={
                themeInfo.isDarkTheme ? 'white' : theme.colors.onSurface
              }
              mode="contained"
              onPress={() => setdialogVisible(true)}
            />
          )}
        </View>
        {errorCondition && (
          <HelperText type="error" padding="normal" visible={true}>
            {`Debe seleccionar ${placeholder}`}
          </HelperText>
        )}
      </Card>
      <DialogBase
        visible={dialogVisible}
        onDismiss={() => setdialogVisible(false)}
        title={`Agregar ${placeholder}`}
        message={''}
        buttonsChilren={
          <Dialog.Actions>
            <DialogButton
              disabled={data.name.length < 3}
              labelStyle={{color: theme.colors.primary}}
              onPress={() => {
                setdialogVisible(false);
                onAddPress!(data);
              }}
              title={'Agregar'}></DialogButton>
            <DialogButton
              labelStyle={{color: theme.colors.error}}
              onPress={() => setdialogVisible(false)}
              title={'Cancelar'}></DialogButton>
          </Dialog.Actions>
        }>
        <CustomInput
          getValue={value => updateData(value, 'name')}
          placeholder={`Nombre de ${placeholder}`}
          errorCondition={data.name.length < 3}
          errorMessage={`Debe agregar nombre de ${placeholder}`}
        />
        <CustomInput
          getValue={value => updateData(value, 'description')}
          placeholder={`Descripción de ${placeholder}`}
          multilne
        />
      </DialogBase>
    </>
  );
};
