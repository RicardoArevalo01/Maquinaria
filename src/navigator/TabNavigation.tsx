import React, {memo, useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons} from '../theme/appTheme';
import {BottomNavigation, Icon} from 'react-native-paper';
import {CommonActions} from '@react-navigation/native';
import {HomeScreen, ProfileScreen} from '../screens';
import {ThemeContext} from '../context';
import { fonts } from '../theme/appFonts';
import { PlanificacionVisitasScreen } from '../screens/visitas/PlanificacionVisitasScreen';
import { VisitasRealizadasScreen } from '../screens/visitas/VisitasRealizadasScreen';

interface TabItem {
  name: string;
  title: string;
  icon: string;
  component: () => React.JSX.Element;
}

const tabItems: TabItem[] = [
  {
    name: 'Planificacion',
    title: 'Planificación',
    icon: icons.calendar,
    component: PlanificacionVisitasScreen,
  },
  {
    name: 'Visitas',
    title: 'Visitas',
    icon: icons.listBox,
    component: VisitasRealizadasScreen ,
  },
  {
    name: 'ProfileScreen',
    title: 'Perfil',
    icon: icons.account,
    component: ProfileScreen,
  },
];
const Tab = createBottomTabNavigator();

export const TabNavigation = memo(() => {
  const {theme} = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      tabBarActiveTintColor: theme.colors.primary,
      }}>
      {tabItems.map(({name, title, icon, component}, index) => (
        <Tab.Screen
          key={index}
          name={name}
          options={{
            tabBarStyle: {
              backgroundColor: theme.colors.elevation.level2,
            },
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
