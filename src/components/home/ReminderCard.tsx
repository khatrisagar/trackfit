import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {rootStyles} from '../../styles/global.style';

const ReminderCard = () => {
  return (
    <View>
      <Text style={styles.text}>ReminderCard</Text>
    </View>
  );
};

const styles: any = StyleSheet.create({
  text: {
    color: rootStyles.primaryTextColor,
    fontSize: rootStyles.fontSize,
  },
});
export default ReminderCard;
