import React, {useEffect} from 'react';
import {children} from '../interfaces';
import {useConnectionStore} from '../shared';
import NetInfo from '@react-native-community/netinfo';

interface Props extends children {}

export const Connection = ({children}: Props) => {
  const {
    checkConnection,
    connection: {isConnected},
  } = useConnectionStore();
  useEffect(
    () =>
      NetInfo.addEventListener(state =>
        checkConnection(state.isConnected ?? false),
      ),
    [],
  );
  useEffect(() => {
    console.log({isConnected});
  }, [isConnected]);
  return <>{children}</>;
};
