import React, {useEffect} from 'react';
import {children} from '../interfaces';
import {useThemeStore} from '../shared';
import {PaperProvider} from 'react-native-paper';
interface Props extends children {}
export const Theme = ({children}: Props) => {
  const {
    theme: {theme, themeInfo},
    onLoadTheme,
    onSaveTheme,
    onChangeThemeColor,
  } = useThemeStore();
  useEffect(() => {
    onLoadTheme();
  }, []);

  useEffect(() => {
    onSaveTheme();
    onChangeThemeColor(themeInfo.colorTheme);
  }, [themeInfo]);
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
