import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerHeader} from './DrawerHeader';
import {DrawerContent} from './DrawerContent';
import {TabNavigation} from './TabNavigation';

const Drawer = createDrawerNavigator();

const drawerItems = [
  {
    name: 'TabNavigation', 
    component: TabNavigation
  }
];

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      defaultStatus="closed"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        header: ({route: {params}}: any) => (
          <DrawerHeader title={params !== undefined ? params.title : ''} />
        ),
      }}>
      {drawerItems.map((props, index) => (
        <Drawer.Screen key={index} {...props} />
      ))}
    </Drawer.Navigator>
  );
};

//#region Menu Interno

//#endregion
