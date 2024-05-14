import React, {memo, useContext, useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {DateTypes, formatDate} from '../../helpers/DateTimeFormat';
import {CustomInput} from './CustomInput';
import {icons} from '../../theme/appTheme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  defaultValue: string;
  getValue: (value: string) => void;
  type?: DateTypes;
  placeholder: string;
  errorCondition?: boolean;
  errorMessage?: string;
  editable?: boolean;
  disable?: boolean;
  isRequired?: boolean;
  loadActualDate?: boolean;
}

export const CustomDateTimePicker = memo(
  ({
    defaultValue,
    getValue,
    type = 'datetime',
    placeholder,
    errorCondition = false,
    errorMessage = '',
    editable = true,
    disable = false,
    isRequired = false,
    loadActualDate = false,
  }: Props) => {
    const {themeInfo} = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const [value, setvalue] = useState(defaultValue);
    useEffect(() => {
      if (value.length > 0) {
        getValue(formatDate(value, type));
      } else {
        if (loadActualDate) {
          getValue(formatDate(new Date().toString(), type));
        }
      }
      console.log('Fecha: ', value);
    }, [value]);

    return (
      <>
        <CustomInput
          placeholder={placeholder}
          defaultValue={value.length > 0 ? formatDate(value, type) : ''}
          getValue={() => {}}
          editable={false}
          disable={disable}
          isRequired={isRequired}
          /*  errorCondition
        errorMessage={`Debe seleccionar una ${
          type === 'time' ? 'hora' : 'fecha'
        } válida`} */
          errorCondition={errorCondition}
          errorMessage={errorMessage}
          icon={icons.calendar}
          onIconPress={() => (editable ? setOpen(true) : {})}
        />
        <DatePicker
          modal
          locale="es"
          confirmText="Confirmar"
          cancelText="Cancelar"
          title={'Seleccionar Fecha'}
          mode={type}
          open={open}
          date={new Date()}
          onConfirm={date => {
            setOpen(false);
            setvalue(date.toString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
          theme={themeInfo.isDarkTheme ? 'dark' : 'light'}
        />
      </>
    );
  },
);
