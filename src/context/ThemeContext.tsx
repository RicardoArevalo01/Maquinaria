import * as React from 'react';
import {createContext, useEffect, useState} from 'react';
import {
  MD3LightTheme as LightTheme,
  MD3DarkTheme as DarkTheme,
  PaperProvider,
  configureFonts,
} from 'react-native-paper';
import {MD3Colors} from 'react-native-paper/lib/typescript/types';
import {ThemeInfo, colorThemeType} from '../interfaces/BaseInterface';
import {useStorage} from '../data/useStorage';
import {ThemeColors} from '../theme/appColors';
import { fonts } from '../theme/appFonts';

type ThemeContextProps = {
  toggleTheme: (colorTheme?: colorThemeType) => void;
  theme: typeof lightTheme;
  themeInfo: ThemeInfo;
  getColorTheme: (colorTheme: colorThemeType) => MD3Colors;
  changeThemeColor: (colorTheme: colorThemeType) => void;
};

export const ThemeContext = createContext({} as ThemeContextProps);

const lightTheme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
  },
  fonts: configureFonts({
    config: {fontFamily: fonts.medium, fontSize: 14},
  }),
};
const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
  fonts: configureFonts({
    config: {fontFamily: fonts.regular, fontSize: 14},
    
  }),
};

export const ThemeProvider = ({children}: any) => {
  const {SaveTheme, GetTheme} = useStorage();
  const [themeInfo, setThemeInfo] = useState<ThemeInfo>({
    isDarkTheme: false,
    colorTheme: 'cyan',
  });
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = async () => {
    setThemeInfo(prevThemeInfo => ({
      isDarkTheme: !prevThemeInfo.isDarkTheme,
      colorTheme: prevThemeInfo.colorTheme,
    }));
  };

  const changeThemeColor = async (colorTheme: colorThemeType) => {
    setThemeInfo(prevThemeInfo => ({
      isDarkTheme: prevThemeInfo.isDarkTheme,
      colorTheme: colorTheme,
    }));
  };

  const getColorTheme = (colorTheme: colorThemeType): MD3Colors => {
    const colorSet = themeInfo.isDarkTheme
      ? ThemeColors.dark
      : ThemeColors.light;
    switch (colorTheme) {
      case 'default':
        return themeInfo.isDarkTheme ? DarkTheme.colors : LightTheme.colors;
      case 'blue':
      case 'pink':
      case 'green':
      case 'orange':
      case 'red':
      case 'yellow':
      case 'cyan':
        return colorSet[colorTheme];
      default:
        return themeInfo.isDarkTheme ? DarkTheme.colors : LightTheme.colors;
    }
  };
  useEffect(() => {
    GetTheme().then(theme => (theme ? setThemeInfo(theme) : {}));
  }, []);

  useEffect(() => {
    const baseTheme = themeInfo.isDarkTheme ? darkTheme : lightTheme;
    const colors = getColorTheme(themeInfo.colorTheme);
    setTheme({
      ...baseTheme,
      colors,
    });
    SaveTheme(themeInfo);
  }, [themeInfo]);

  return (
    <ThemeContext.Provider
      value={{toggleTheme, theme, themeInfo, getColorTheme, changeThemeColor}}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};
