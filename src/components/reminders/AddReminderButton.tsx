import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {rootStyles} from '../../styles/global.style';

const AddReminderButton = ({handleClick}: any) => {
  return (
    <TouchableHighlight onPress={handleClick}>
      <View style={styles.container}>
        <Text style={styles.text}>Add</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles: any = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: rootStyles.secondaryBackgroundColor,
    borderRadius: 12,
    width: 100,
  },
  text: {
    textAlign: 'center',
    color: rootStyles.buttonTextColor,
    fontSize: 20,
  },
});

export default AddReminderButton;
