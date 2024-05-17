import {setConnection, useAppStore} from '..';

export const useConnectionStore = () => {
  const {connection, dispatch} = useAppStore();

  const checkConnection = async (hasConnection: boolean) =>
    dispatch(setConnection(hasConnection));

  return {checkConnection, connection};
};
