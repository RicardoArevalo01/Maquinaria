import {useIsFocused} from '@react-navigation/native';
import React, {createContext, useEffect, useState} from 'react';
import {AppState, AppStateStatus, Platform} from 'react-native';
import {
  check,
  openSettings,
  Permission,
  PERMISSIONS,
  PermissionStatus,
  requestMultiple,
} from 'react-native-permissions';

export interface PermissionsState {
  permissionAppStatus: PermissionStatus;
}

type PermissionsContextProps = {
  permissions: PermissionStatus;
  askPermission: () => void;
  checkPermission: () => void;
};

let AndroidPermissions: Permission[] = [
  //PERMISSIONS.ANDROID.CAMERA,
  //PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  //PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
];
const androidSDKVersion = Platform.OS === 'android' ? Platform.Version : 0;
/* if (androidSDKVersion >= 33) {
  AndroidPermissions.push(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
}  */
/* if (androidSDKVersion <= 29) {
  AndroidPermissions.push(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
}
if (androidSDKVersion <= 32) {
  AndroidPermissions.push(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
}
if (androidSDKVersion >= 33) {
  AndroidPermissions.push(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
} */

let IosPermissions: Permission[] = [
  //PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  //PERMISSIONS.IOS.CAMERA,
  //PERMISSIONS.IOS.MEDIA_LIBRARY,
  //PERMISSIONS.IOS.PHOTO_LIBRARY,
];

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({children}: any) => {
  const [permissions, setpermissions] =
    useState<PermissionStatus>('unavailable');

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

  useEffect(() => {
    console.log(permissions);
  }, [permissions]);

  const askPermission = async () => {
    const permissions: Permission[] | undefined = Platform.select({
      ios: IosPermissions,
      android: AndroidPermissions,
    });

    const permissionStatuses = await requestMultiple(permissions!);

    const allGranted = Object.values(permissionStatuses).every(
      status => status === 'granted',
    );

    if (allGranted) {
      setpermissions('granted');
    } else {
      openSettings();
    }
  };

  const checkPermission = async () => {
    const permissions = Platform.select({
      ios: IosPermissions,
      android: AndroidPermissions,
    });

    const permissionStatuses = await Promise.all(
      permissions!.map(async permission => await check(permission)),
    );
    console.log(permissionStatuses);
    if (permissionStatuses.every(status => status === 'granted')) {
      setpermissions('granted');
    } else {
      setpermissions('denied');
    }
  };

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        askPermission,
        checkPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
