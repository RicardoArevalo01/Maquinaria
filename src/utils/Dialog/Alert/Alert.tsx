import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useContext,
} from 'react';
import {AxiosError} from 'axios';
import {ApiErrorResponse} from '../../../interfaces/BaseApiInterface';
import {CheckInternetContext} from '../../../context/CheckInternetContext';

import {icons} from '../../../theme/appTheme';
import {AlertDefaut} from './AlertDefaut';
import {AlertImage} from './AlertImage';
import {AlertMultiOptions} from './AlertMultioptions';
import {AlertPromt} from './AlertPromt';
import {AlertYesNo} from './AlertYesNo';

type AlertType = 'default' | 'yesno' | 'promt' | 'image' | 'multioptions';
interface Options {
  title: string;
  message: string;
  placeholder?: string;
  imagePath?: string;
  icon?: string;
  iconColor?: string;
  onPress?: (value?: string) => void;
  onDismiss?: () => void;
  alertOptions?: {title: string; onPress: () => void}[];
}
interface AlertData extends Options {
  type: AlertType;
  value: string;
}

type AlertProps = {
  show: (type: AlertType, options: Options) => void;
  showApiError: (
    error: AxiosError<ApiErrorResponse>,
    onPress?: () => void,
  ) => void;
};

const AlertComponent = forwardRef<AlertProps>((_props, ref) => {
  const {hasConnection} = useContext(CheckInternetContext);
  const [visible, setVisible] = useState(false);
  const [alertData, setAlertData] = useState<AlertData>({
    type: 'default',
    title: '',
    message: '',
    placeholder: '',
    value: '',
    imagePath: '',
    onPress: () => {},
    onDismiss: () => {},
    alertOptions: [],
  });

  const show = (type: AlertType, options: Options) => {
    hide();
    setAlertData({...options, type, value: ''});
    setVisible(true);
  };
  const hide = () => setVisible(false);

  const showApiError = (
    error: AxiosError<ApiErrorResponse>,
    onPress?: () => void,
  ) => {
    console.log(JSON.stringify(error, null, 3));
    console.log('status: ', error.response?.status);
    show('default', {
      title: 'Error',
      message: !hasConnection
        ? 'Verifique su conexión a Internet'
        : error.response?.status! >= 400 && error.response?.status! < 500
          ? typeof error.response?.data === 'string' &&
            !(error.response?.data as string).toString().match(/<html|<\?xml/)
            ? error.response.data // Si la respuesta es un string, úsalo directamente
            : typeof error.response?.data === 'object' &&
                typeof error.response.data.Message === 'string'
              ? error.response.data.Message // Si hay un error_description en el objeto JSON, úsalo
              : typeof error.response?.data.error_description === 'string'
                ? error.response.data.error_description // Agrega esta condición
                : 'Ocurrió un error en la consulta'
          : error.response?.status! >= 500
            ? 'Ocurrió un error en el servidor'
            : 'Ocurrió un error inesperado',
      onPress,
      icon: icons.cloudAlert,
    });
  };

  const checkValue = () => {
    // Verifica si el valor está vacío
    if (alertData.value.length === 0) {
      // Muestra una alerta
      show('default', {
        title: 'Aviso',
        message: 'Debe llenar el campo requerido',
      });
    } else {
      // Ejecuta OkFunction con el valor
      if (typeof alertData.onPress === 'function') {
        alertData.onPress(alertData.value);
      }
      // Vacía el valor y oculta la alerta
      setAlertData(prevData => ({...prevData, value: ''}));
      hide();
    }
  };

  useImperativeHandle(ref, () => ({
    show: (type, options) => show(type, options),
    showApiError: (error, OkFunction) => showApiError(error, OkFunction),
  }));

  return (
    <>
      {
        {
          default: (
            <AlertDefaut
              icon={alertData.icon}
              iconColor={alertData.iconColor}
              visible={visible}
              title={alertData.title}
              message={alertData.message}
              onDismiss={hide}
              onPress={alertData.onPress}
            />
          ),
          yesno: (
            <AlertYesNo
              icon={alertData.icon}
              iconColor={alertData.iconColor}
              visible={visible}
              title={alertData.title}
              message={alertData.message}
              onDismiss={hide}
              onPress={alertData.onPress}
            />
          ),
          promt: (
            <AlertPromt
              icon={alertData.icon}
              iconColor={alertData.iconColor}
              visible={visible}
              title={alertData.title}
              message={alertData.message}
              placeholder={alertData.placeholder}
              onDismiss={hide}
              onChangeText={newValue =>
                setAlertData(prevData => ({...prevData, value: newValue}))
              }
              onPress={checkValue}
            />
          ),
          image: (
            <AlertImage
              icon={alertData.icon}
              iconColor={alertData.iconColor}
              visible={visible}
              title={alertData.title}
              message={alertData.message}
              onDismiss={hide}
              onPress={alertData.onPress}
              imagePath={alertData?.imagePath ?? ''}
            />
          ),
          multioptions: (
            <AlertMultiOptions
              icon={alertData.icon}
              iconColor={alertData.iconColor}
              visible={visible}
              title={alertData.title}
              message={alertData.message}
              onDismiss={hide}
              options={alertData?.alertOptions ?? []}
            />
          ),
        }[alertData.type]
      }
    </>
  );
});

export const Alert = {
  show: (type: AlertType, options: Options) =>
    alertRef.current?.show(type, options) ?? {},
  showApiError: (
    error: AxiosError<ApiErrorResponse>,
    OkFunction?: () => void,
  ) => alertRef.current?.showApiError(error, OkFunction) ?? {},
};

const alertRef = useRef<AlertProps | null>(null);
export const AlertManager = () => (
  <AlertComponent ref={ref => (alertRef.current = ref)} />
);
