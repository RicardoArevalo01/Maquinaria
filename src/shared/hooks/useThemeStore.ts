import {colorThemeType} from '../../theme';
import {
  changeThemeColor,
  startLoadTheme,
  startSaveTheme,
  toggleTheme,
} from '../theme';
import {useAppStore} from './useAppStore';

export const useThemeStore = () => {
  const {theme, dispatch} = useAppStore();

  const onLoadTheme = async () => {
    dispatch(startLoadTheme());
  };

  const onSaveTheme = async () => {
    dispatch(startSaveTheme());
  };

  const onToggleTheme = () => {
    dispatch(toggleTheme());
  };
  const onChangeThemeColor = (colors: colorThemeType) => {
    dispatch(changeThemeColor(colors));
  };
  return {theme, onLoadTheme, onSaveTheme, onToggleTheme, onChangeThemeColor};
};
