import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Reminders from './src/screens/Reminders';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Workout from './src/screens/Workout';

const Stack = createNativeStackNavigator();

const screens: any = [
  {
    name: 'home',
    component: Home,
  },
  {
    name: 'profile',
    component: Profile,
  },
  {
    name: 'reminders',
    component: Reminders,
  },
  {
    name: 'workout',
    component: Workout,
  },
];

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'home'}
        screenOptions={{headerShown: false}}>
        {screens.map((screen: any) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default app;
