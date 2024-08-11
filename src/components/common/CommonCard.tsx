import React from 'react';
import {StyleSheet, View} from 'react-native';
import {rootStyles} from '../../styles/global.style';

const CommonCard = ({children}: any) => {
  return <View style={styles.container}>{children}</View>;
};

export default CommonCard;

const styles: any = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: '#dedede',
    padding: 16,
    borderRadius: 12,
    backgroundColor: rootStyles.secondaryBackgroundColor,
  },
  text: {
    color: rootStyles.primaryTextColor,
    fontSize: 20,
  },
  button: {
    cursor: 'pointer',
  },
});
