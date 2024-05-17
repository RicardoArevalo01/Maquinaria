import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRouter} from './src/router';
import {Footer} from './src/theme';
import {SafeAreaView} from 'react-native';
import {AlertManager, LoaderManager, SnackToastBarManager} from './src/utils';
import {SheetProvider} from 'react-native-actions-sheet';
import {Provider as ReduxProvider} from 'react-redux';
import {store, useThemeStore} from './src/shared';
import {Connection, Permissions, Theme} from './src/global';

//#region AppState

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => (
  <ReduxProvider store={store}>
    <Theme>
      <Permissions>
        <Connection>
          <SheetProvider>{children}</SheetProvider>
        </Connection>
      </Permissions>
    </Theme>
  </ReduxProvider>
);

//#endregion

const App = () => {
  
return (
  <SafeAreaView style={{flex: 1}}>
    <AppState>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
      <AlertManager />
      <LoaderManager />
      <SnackToastBarManager />
      <Footer />
    </AppState>
  </SafeAreaView>
);
}

export default App;
