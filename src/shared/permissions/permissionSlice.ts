import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {PermissionStatus} from 'react-native-permissions';

interface Permission {
  permissionStatus: PermissionStatus;
}

const initialState: Permission = {
  permissionStatus: 'unavailable',
};

export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setPermission: (state, action: PayloadAction<PermissionStatus>) => {
      state.permissionStatus = action.payload;
    },
    checkStatusPermission: state => {
      state.permissionStatus = 'unavailable';
    },
  },
});

export const {setPermission, checkStatusPermission} = permissionSlice.actions;
