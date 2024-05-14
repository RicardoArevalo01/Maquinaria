import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {SnackToast} from './SnackToastBarComponents/SnackToast';

type SnackToastBarProps = {
  show: (
    title: string,
    label: string,
    onPress?: () => Promise<void>,
  ) => Promise<void>;
  hide: () => Promise<void>;
};

export const SnackToastBarComponent = forwardRef<SnackToastBarProps>(
  (_props, ref) => {
    const [toast, setToast] = useState({
      title: '',
      label: '',
      onPress: async () => {},
    });

    const [visible, setVisible] = useState(false);

    const hide = async () => setVisible(false);

    const show = async (
      title: string,
      label: string,
      onPress: () => Promise<void> = async () => {},
    ) => {
      await hide();
      setToast({
        title,
        label,
        onPress,
      });
      setVisible(true);
    };

    useImperativeHandle(ref, () => ({
      show: async (
        title: string,
        label: string,
        onPress?: () => Promise<void>,
      ) => await show(title, label, onPress),
      hide: async () => await hide(),
    }));

    return (
      <SnackToast
        title={toast.title}
        label={toast.label}
        visible={visible}
        onDismiss={hide}
        onPress={toast.onPress}
      />
    );
  },
);

export const SnackToastBar = {
  show: async (title: string, label: string, onPress?: () => Promise<void>) =>
    await SnackToastBarRef.current?.show(title, label, onPress),
  hide: async () => await SnackToastBarRef.current?.hide(),
};

const SnackToastBarRef = useRef<SnackToastBarProps | null>(null);
export const SnackToastBarManager = () => (
  <SnackToastBarComponent ref={ref => (SnackToastBarRef.current = ref)} />
);
