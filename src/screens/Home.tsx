import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Homeee</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252525',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default Home;
