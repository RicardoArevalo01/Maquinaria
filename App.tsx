import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { AppStackNavigation } from './src/navigations/AppStackNavigation';

export default function App() {
  return (

    <ThemeProvider>
        <NavigationContainer>
          <AppStackNavigation />
        </NavigationContainer>
    </ThemeProvider>

  );
}