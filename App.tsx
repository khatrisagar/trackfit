import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text} from 'react-native';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator();

const screens: any = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Profile',
    component: Profile,
  },
];

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
