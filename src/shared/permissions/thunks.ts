import {Dispatch} from '@reduxjs/toolkit';
import {Platform} from 'react-native';
import {
  Permission,
  check,
  openSettings,
  requestMultiple,
} from 'react-native-permissions';
import {checkStatusPermission, setPermission} from './permissionSlice';

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

export const startAskPermissions = () => async (dispatch: Dispatch) => {
  dispatch(checkStatusPermission());
  const permissions: Permission[] | undefined = Platform.select({
    ios: IosPermissions,
    android: AndroidPermissions,
  });
  const permissionStatuses = await requestMultiple(permissions!);
  const allGranted = Object.values(permissionStatuses).every(
    status => status === 'granted',
  );
  if (allGranted) {
    dispatch(setPermission('granted'));
  } else {
    openSettings();
  }
};

export const startCheckPermission = () => async (dispatch: Dispatch) => {
  dispatch(checkStatusPermission());
  const permissions = Platform.select({
    ios: IosPermissions,
    android: AndroidPermissions,
  });
  const permissionStatuses = await Promise.all(
    permissions!.map(async permission => await check(permission)),
  );
  console.log(permissionStatuses);
  if (permissionStatuses.every(status => status === 'granted')) {
    dispatch(setPermission('granted'));
  } else {
    dispatch(setPermission('denied'));
  }
};
