import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerHeader} from '../../../theme';
import {DrawerContent} from './DrawerContent';
import {TabNavigation} from '../tab';
import {ResetPasswordScreen} from '../../../auth';
import { HomeScreen } from '../../screens';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      defaultStatus="closed"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        header: ({route: {params}}: any) => (
          <DrawerHeader title={params !== undefined ? params.title : ''} />
        ),
      }}>
        <Drawer.Screen 
          name= 'Inicio' 
          component={ StackNavigation }
        /> 
        <Drawer.Screen 
          name= 'ResetPasswordScreen' 
          component={ ResetPasswordScreen }
        /> 
    </Drawer.Navigator>
  );
};

//#region Menu Interno

//#endregion
