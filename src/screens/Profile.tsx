import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';
import NavigationBottom from '../components/NavigationBar/BottomNavigationBar';
import {rootStyles} from '../styles/global.style';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text>Profile</Text>
        <Button
          title="Go to home"
          onPress={() => navigation.navigate('home')}
        />
      </View>
      <NavigationBottom />
    </View>
  );
};

const styles: any = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: rootStyles.primaryBackgroundColor,
  },
  profileContainer: {
    // height: '90%',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Home;
