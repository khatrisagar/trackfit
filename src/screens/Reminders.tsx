import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {rootStyles} from '../styles/global.style';
import CommonCard from '../components/common/CommonCard';
import TopBackNavigationView from '../components/layout/TopBackNavigationView';
import ReminderTopBarActions from '../components/reminders/ReminderTopBarActions';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import CreateReminderDrawer from '../components/reminders/CreateReminderDrawer';

const Reminders = () => {
  const navigation = useNavigation<any>();

  const [isBottomActionBarVisible, setBottonActionBarVisible] = useState(true);
  const animation = useRef(new Animated.Value(1000)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isBottomActionBarVisible ? -10 : 1000,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [isBottomActionBarVisible, animation]);

  const handleOnBack = () => {
    navigation.navigate('home');
  };

  const handleAddReminder = () => {
    setBottonActionBarVisible(prev => !prev);
  };

  return (
    <View>
      <View style={styles.container}>
        <TopBackNavigationView
          title="Reminders"
          handleOnBack={handleOnBack}
          headerRightActions={
            <ReminderTopBarActions handleAddReminder={handleAddReminder} />
          }
        />
        <CommonCard>
          <Text style={styles.text}>Text</Text>
          <Text style={styles.text}>Text</Text>
        </CommonCard>

        <View style={styles.addReminderButtonWrapper}>
          {/* <AddReminderButton handleClick={handleAddReminder} /> */}
        </View>
      </View>
      <View style={styles.bottomActionBar}>
        <Animated.View
          style={[
            styles.bottomActionBar,
            {transform: [{translateY: animation}]},
          ]}>
          <CreateReminderDrawer handleAddReminder={handleAddReminder} />
        </Animated.View>
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
    color: rootStyles.primaryTextColor,
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

  bottomActionBar: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});
