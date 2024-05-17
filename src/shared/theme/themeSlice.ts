import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {appFont, colorThemeType, ThemeColors, ThemeInfo} from '../../theme';
import {
  MD3LightTheme as LightTheme,
  MD3DarkTheme as DarkTheme,
  configureFonts,
} from 'react-native-paper';
import {MD3Colors, MD3Theme} from 'react-native-paper/lib/typescript/types';

interface Theme {
  themeInfo: ThemeInfo;
  theme: MD3Theme;
}

const lightTheme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
  },
  fonts: configureFonts({
    config: {
      fontFamily: appFont,
    },
  }),
};
const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
  fonts: configureFonts({
    config: {
      fontFamily: appFont,
    }
    ,
  }),
};

const initialState: Theme = {
  themeInfo: {
    isDarkTheme: false,
    colorTheme: 'cyan',
  },
  theme: lightTheme,
};

const getColorTheme = (
  colorTheme: colorThemeType,
  isDarkTheme: boolean,
): MD3Colors => {
  const colorSet = isDarkTheme ? ThemeColors.dark : ThemeColors.light;
  switch (colorTheme) {
    case 'default':
      return isDarkTheme ? DarkTheme.colors : LightTheme.colors;
    case 'blue':
    case 'pink':
    case 'green':
    case 'orange':
    case 'red':
    case 'yellow':
    case 'cyan':
      return colorSet[colorTheme];
    default:
      return isDarkTheme ? DarkTheme.colors : LightTheme.colors;
  }
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.themeInfo.isDarkTheme = !state.themeInfo.isDarkTheme;
      state.theme.colors = getColorTheme(
        state.themeInfo.colorTheme,
        state.themeInfo.isDarkTheme,
      );
    },
    changeThemeColor: (state, action: PayloadAction<colorThemeType>) => {
      state.themeInfo.colorTheme = action.payload;
      state.theme.colors = getColorTheme(
        action.payload,
        state.themeInfo.isDarkTheme,
      );
    },
    loadTheme: (state, action: PayloadAction<ThemeInfo>) => {
      state.themeInfo = action.payload;
      state.theme = state.themeInfo.isDarkTheme ? darkTheme : lightTheme;
    },
  },
});

export const {toggleTheme, changeThemeColor, loadTheme} = themeSlice.actions;
