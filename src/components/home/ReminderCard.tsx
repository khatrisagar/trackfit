import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {rootStyles} from '../../styles/global.style';

const ReminderCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ReminderCard</Text>
    </View>
  );
};

const styles: any = StyleSheet.create({
  container: {
    height: 60,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    color: rootStyles.primaryTextColor,
    fontSize: rootStyles.fontSize,
  },
});
export default ReminderCard;
