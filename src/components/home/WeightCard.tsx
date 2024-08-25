import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {rootStyles} from '../../styles/global.style';

const WeightCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weight</Text>
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
export default WeightCard;
