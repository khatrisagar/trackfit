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
    options: {
      animation: 'none',
    },
  },
  {
    name: 'profile',
    component: Profile,
    options: {
      animation: 'none',
    },
  },
  {
    name: 'reminders',
    component: Reminders,
  },
  {
    name: 'workout',
    component: Workout,
    options: {
      animation: 'none',
    },
  },
];

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'home'}
        screenOptions={{
          headerShown: false,
          // animation: 'none',
        }}>
        {screens.map((screen: any) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
