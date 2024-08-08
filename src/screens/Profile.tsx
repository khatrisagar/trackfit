import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = ({navigation}: any) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

// const styles: any = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
// });

export default Home;
