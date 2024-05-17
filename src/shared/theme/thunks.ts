import {Dispatch} from '@reduxjs/toolkit';
import {useUIStorage} from '../../theme';
import {loadTheme} from './themeSlice';
import {RootState} from '../store';

export const startLoadTheme = () => async (dispatch: Dispatch) => {
  const {GetTheme} = useUIStorage();
  await GetTheme().then(theme => (theme ? dispatch(loadTheme(theme)) : {}));
};

export const startSaveTheme =
  () => async (_dispatch: Dispatch, getState: () => RootState) => {
    const {SaveTheme} = useUIStorage();
    await SaveTheme(getState().theme.themeInfo);
  };
