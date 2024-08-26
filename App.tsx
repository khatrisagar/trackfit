import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Reminders from './src/screens/Reminders';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Workout from './src/screens/Workout';
import Weight from './src/screens/Weight';

const Stack = createNativeStackNavigator();

const screens: any = [
  {
    name: 'home',
    component: Home,
    options: {
      animation: 'none',
    },
  },
  // all the routes from  home
  {
    name: 'reminders',
    component: Reminders,
  },
  {
    name: 'weight',
    component: Weight,
  },
  {
    name: 'profile',
    component: Profile,
    options: {
      animation: 'none',
    },
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
        initialRouteName={'weight'}
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
