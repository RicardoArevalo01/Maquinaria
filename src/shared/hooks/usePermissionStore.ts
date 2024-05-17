import {startAskPermissions, startCheckPermission, useAppStore} from '..';

export const usePermissionStore = () => {
  const {permission, dispatch} = useAppStore();

  const askPermissions = () => {
    dispatch(startAskPermissions());
  };

  const checkPermission = () => {
    dispatch(startCheckPermission());
  };

  return {permission, askPermissions, checkPermission};
};
