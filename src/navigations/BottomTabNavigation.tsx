import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlanificacionVisitasScreen } from '../screens/PlanificacionVisitasScreen';
import { PerfilScreen } from '../screens/PerfilScreen';
import { VisitasRealizadasScreen } from '../screens/VisitasRealizadasScreen';
import { colors } from '../theme/globals';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Planificación"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grey,
        tabBarStyle: {
          backgroundColor: colors.light,
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 12,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen name="Planificación" component={ PlanificacionVisitasScreen } options={{
        tabBarIcon: ({ color }) => (
          <Icon name="event" size={24} color={color} />
        ),
      }} />
      <Tab.Screen name="Visitas" component={ VisitasRealizadasScreen } options={{
        tabBarIcon: ({ color }) => (
          <Icon name="checklist" size={24} color={color} />
        ),
      }} />
      <Tab.Screen name="Perfil" component={ PerfilScreen } options={{
        tabBarIcon: ({ color }) => (
          <Icon name="person" size={24} color={color} />
        ),
      }} />
    </Tab.Navigator>
  );
}