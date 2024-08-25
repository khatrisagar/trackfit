import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import NavigationBottom from '../components/NavigationBar/BottomNavigationBar';
import {rootStyles} from '../styles/global.style';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text>Profile</Text>
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
    flex: 1,
    display: 'flex',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Home;
