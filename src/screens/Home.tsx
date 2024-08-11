import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {rootStyles} from '../styles/global.style';
import CommonCard from '../components/common/CommonCard';
import ReminderCard from '../components/home/ReminderCard';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import NavigationBottom from '../components/NavigationBar/BottomNavigationBar';

const Home = () => {
  const navigation = useNavigation<any>();

  const handleNavigation = (routeName: string) => {
    navigation.navigate(routeName);
  };
  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={true} style={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <CommonCard>
            <Text style={styles.text}>Texttt</Text>
          </CommonCard>
          <TouchableRipple
            rippleColor="rgba(0, 0, 0, 0.32)"
            borderless={true}
            onPress={() => handleNavigation('reminders')}>
            <CommonCard>
              <ReminderCard />
            </CommonCard>
          </TouchableRipple>
        </View>
      </ScrollView>
      <NavigationBottom />
    </View>
  );
};

const styles: any = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: rootStyles.primaryBackgroundColor,
  },
  scrollContainer: {
    height: '100%',
  },
  cardContainer: {
    flex: 1,
    display: 'flex',
    gap: 6,
    padding: 6,
  },
  text: {
    color: rootStyles.primaryTextColor,
    fontSize: 20,
  },
});

export default Home;
