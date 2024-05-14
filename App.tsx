import React from 'react';
import {AuthProvider} from './src/context/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {Footer} from './src/theme/Footer';
import {SafeAreaView} from 'react-native';
import {
  CheckInternetProvider,
  PermissionsProvider,
  ThemeProvider,
} from './src/context';
import {AlertManager, LoaderManager, SnackToastBarManager} from './src/utils';
import {SheetProvider} from 'react-native-actions-sheet';

//#region AppState

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => (
  <ThemeProvider>
    <CheckInternetProvider>
      <SheetProvider>
        <PermissionsProvider>
          <AuthProvider>{children}</AuthProvider>
        </PermissionsProvider>
      </SheetProvider>
    </CheckInternetProvider>
  </ThemeProvider>
);

//#endregion

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <AppState>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
      <AlertManager />
      <LoaderManager />
      <SnackToastBarManager />
      <Footer />
    </AppState>
  </SafeAreaView>
);

export default App;
