import {Dispatch} from '@reduxjs/toolkit';
import {checking, login, logout} from './authSlice';
import {sleep} from '../../helpers';

export const startChecking = () => async (dispatch: Dispatch) => {
  dispatch(checking());
  dispatch(logout());
  /*  await sleep(2).then(() =>
    dispatch(
      login({
        token: 'asdasd',
        role: 'admin',
        expiracion: '',
        ambiente: '',
        baseDatos: '',
        firstName: 'geo',
        lastName: 'moreno',
        userName: 'geo',
      }),
    ),
  ); */
};

export const startSignIn =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    dispatch(
      login({
        token: 'asdasd',
        role: 'admin',
        expiracion: '',
        ambiente: '',
        baseDatos: '',
        firstName: 'geo',
        lastName: 'moreno',
        userName: email,
      }),
    );
  };

export const startLogOut = () => async (dispatch: Dispatch) => {
  dispatch(logout());
};
