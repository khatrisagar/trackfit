import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {rootStyles} from '../styles/global.style';
import CommonCard from '../components/common/CommonCard';
import TopBackNavigationView from '../components/layout/TopBackNavigationView';
import ReminderTopBarActions from '../components/reminders/ReminderTopBarActions';
import {useNavigation} from '@react-navigation/native';

const Reminders = () => {
  const navigation = useNavigation<any>();

  const handleOnBack = () => {
    navigation.navigate('home');
  };

  return (
    <View style={styles.container}>
      <TopBackNavigationView
        title="Reminders"
        handleOnBack={handleOnBack}
        headerRightActions={<ReminderTopBarActions />}
      />
      <CommonCard>
        <Text style={styles.text}>Text</Text>
        <Text style={styles.text}>Text</Text>
      </CommonCard>

      <View style={styles.addReminderButtonWrapper}>
        {/* <AddReminderButton handleClick={handleAddReminder} /> */}
      </View>
    </View>
  );
};

export default Reminders;

const styles: any = StyleSheet.create({
  container: {
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
