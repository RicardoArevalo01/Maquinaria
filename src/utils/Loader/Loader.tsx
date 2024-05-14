import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {Modal} from 'react-native';
import {LoadingModal} from './LoaderComponents/LoadingModal';

type LoaderProps = {
  show: () => Promise<void>;
  hide: () => Promise<void>;
};

export const LoaderComponent = forwardRef<LoaderProps>((_props, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const hide = async () => setIsLoading(false);

  const show = async () => await hide().then(() => setIsLoading(true));

  useImperativeHandle(ref, () => ({
    show: async () => await show(),
    hide: async () => await hide(),
  }));

  return (
    <Modal visible={isLoading} transparent animationType="fade">
      <LoadingModal />
    </Modal>
  );
});

export const Loader = {
  show: async () => (await loaderRef.current?.show()) ?? {},
  hide: async () => (await loaderRef.current?.hide()) ?? {},
};

const loaderRef = useRef<LoaderProps | null>(null);
export const LoaderManager = () => (
  <LoaderComponent ref={ref => (loaderRef.current = ref)} />
);
