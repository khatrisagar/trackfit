import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {rootStyles} from '../styles/global.style';
import CommonCard from '../components/common/CommonCard';

const Home = () => {
  return (
    <View style={styles.container}>
      <CommonCard>
        <Text style={styles.text}>Texttt</Text>
      </CommonCard>
    </View>
  );
};

const styles: any = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    padding: 6,
    backgroundColor: rootStyles.primaryBackgroundColor,
  },
  text: {
    color: rootStyles.primaryTextColor,
    fontSize: 20,
  },
  button: {
    cursor: 'pointer',
  },
});

export default Home;
