import React, {useEffect} from 'react';
import {children} from '../interfaces';
import {usePermissionStore} from '../shared';
import {AppState, AppStateStatus} from 'react-native';
interface Props extends children {}
export const Permissions = ({children}: Props) => {
  const {checkPermission} = usePermissionStore();
  useEffect(() => {
    checkPermission(); // Verificar los permisos cuando el componente se monte por primera vez
    const checkPermissionsOnAppStateChange = (state: AppStateStatus) => {
      if (state === 'active') {
        checkPermission();
      }
    };
    const appStateSubscription = AppState.addEventListener(
      'change',
      checkPermissionsOnAppStateChange,
    );
    return () => {
      appStateSubscription.remove();
    };
  }, []);
  /*   useEffect(() => {
    console.log(permissionStatus);
  }, [permissionStatus]); */
  return <>{children}</>;
};
