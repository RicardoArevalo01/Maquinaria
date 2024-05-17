import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, Icon} from 'react-native-paper';
import {HomeScreen, PlanificacionVisitasScreen, ProfileScreen, VisitasRealizadasScreen} from '../../screens';
import {useThemeStore} from '../../../shared';
import { icons } from '../../../theme';
import { CommonActions } from '@react-navigation/native';

interface TabItem {
  name: string;
  title: string;
  icon: string;
  component: () => React.JSX.Element;
}

const tabItems: TabItem[] = [
  {
    name: 'Planificación',
    title: 'Planificación',
    icon: icons.calendar,
    component: PlanificacionVisitasScreen,
  },
  {
    name: 'Visitas Realizadas',
    title: 'Historial',
    icon: icons.viewList,
    component: VisitasRealizadasScreen ,
  },
];
const Tab = createBottomTabNavigator();

export const TabNavigation = memo(() => {
  const {
    theme: {theme, themeInfo},
  } = useThemeStore();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.elevation.level2,
          borderTopWidth: 0,
          height: 80,
          paddingBottom: 20,
          paddingTop: 15,
        },
        tabBarLabelStyle: {
          fontWeight: '500',
        },
        tabBarItemStyle:{
          justifyContent: 'center',
        },
      headerShown: false,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
      }}>
      {tabItems.map(({name, title, icon, component}, index) => (
        <Tab.Screen
          key={index}
          name={name}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icon
                source={icon}
                size={size}
                color={focused ? theme.colors.primary : color}
              />
            ),
          }}
          component={component}
        />
      ))}
    </Tab.Navigator>
  );
});
