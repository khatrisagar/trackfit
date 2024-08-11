import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Reminders from './src/screens/Reminders';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
// import BottomNavbarLayout from './src/components/layout/BottomNavigationView';
import NavigationBottom from './src/components/NavigationBar/NavigationBottom';

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
];

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'reminders'}
        // initialRouteName={'home'}
        screenOptions={{headerShown: false}}>
        {/* <BottomNavbarLayout> */}
        {screens.map((screen: any) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
        {/* </BottomNavbarLayout> */}
      </Stack.Navigator>
      <NavigationBottom />
    </NavigationContainer>
  );
};
export default app;
// const HomeScreen = ({navigation}: any) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
//     />
//   );
// };
// const ProfileScreen = ({navigation, route}: any) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };
