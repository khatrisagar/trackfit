import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {rootStyles} from '../styles/global.style';
import CommonCard from '../components/common/CommonCard';
import AddReminderButton from '../components/reminders/AddReminderButton';

const Reminders = () => {
  const handleAddReminder = () => {
    console.log('on add reminderrr');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Reminders</Text>
      </View>
      <CommonCard>
        <Text style={styles.text}>Text</Text>
        <Text style={styles.text}>Text</Text>
      </CommonCard>

      <View style={styles.addReminderButtonWrapper}>
        <AddReminderButton handleClick={handleAddReminder} />
      </View>
    </View>
  );
};

export default Reminders;

const styles: any = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    padding: 10,
    backgroundColor: rootStyles.primaryBackgroundColor,
  },
  headerWrapper: {
    paddingVertical: 10,
  },
  headerText: {
    color: rootStyles.secondaryTextColor,
    fontSize: rootStyles.headerOneFontSize,
    textAlign: 'center',
  },
  text: {
    color: rootStyles.primaryTextColor,
    fontSize: rootStyles.fontSize,
  },
  addReminderButtonWrapper: {
    paddingTop: 16,
    display: 'flex',
    alignItems: 'flex-end',
  },
});
