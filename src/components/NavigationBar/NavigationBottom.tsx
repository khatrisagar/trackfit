import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {rootStyles} from '../../styles/global.style';
import HouseHeartIcon from '../../assets/icons/house-heart.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import {useNavigation} from '@react-navigation/native';

const NavigationBottom = () => {
  const navigation = useNavigation<any>();
  // const navigationRoutes = [
  //   {name: 'home', label: 'Home', icon: HouseHeartIcon},
  //   {name: 'profile', label: 'Profile', icon: ProfileIcon},
  // ];

  const handleNavigation = (routeName: string) => {
    console.log('navigate', routeName);
    navigation.navigate(routeName);
  };
  return (
    <View style={styles.container}>
      {/* {navigationRoutes.map((navigationInfo, index) => (
        <TouchableHighlight
          key={index}
          // key={navigationInfo.name}
          style={styles.touchableHighlightContainer}
          onPress={() => handleNavigation(navigationInfo.name)}>
          <View style={styles.iconContainer}>
            {React.createElement(navigationInfo.icon, {width: 30, height: 30})}
            <Text style={styles.text}>{navigationInfo.label}</Text>
          </View>
        </TouchableHighlight>
      ))} */}
      <TouchableHighlight
        style={styles.touchableHighlightContainer}
        onPress={() => handleNavigation('home')}>
        <View style={styles.iconContainer}>
          <HouseHeartIcon width={30} height={30} />
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.touchableHighlightContainer}
        onPress={() => handleNavigation('profile')}>
        <View style={styles.iconContainer}>
          <ProfileIcon width={30} height={30} />
          <Text style={styles.text}>Profile</Text>
        </View>
      </TouchableHighlight>
      {/* <TouchableHighlight style={styles.touchableHighlightContainer}>
        <View style={styles.iconContainer}>
          <ProfileIcon width={30} height={30} />
          <Text style={styles.text}>Profile</Text>
        </View>
      </TouchableHighlight> */}
    </View>
  );
};

export default NavigationBottom;

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: rootStyles.primaryBackgroundColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    width: '100%',
    paddingHorizontal: 16,
    gap: 16,
  },
  text: {
    color: '#ffffff',
  },

  // navigationIcon: {
  //   width: 40,
  //   height: 40,
  //   color: '#ffffff',
  // },
  touchableHighlightContainer: {
    width: '50%',
    // height: '100%',
  },
  iconContainer: {
    backgroundColor: rootStyles.secondaryBackgroundColor,
    borderRadius: rootStyles.borderRadius,
    // width: 300,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
});
