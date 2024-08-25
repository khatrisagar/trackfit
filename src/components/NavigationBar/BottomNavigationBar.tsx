import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {rootStyles} from '../../styles/global.style';
import {useNavigation} from '@react-navigation/native';
import {useNavigationState} from '@react-navigation/native';

// icons
import HouseHeartIcon from '../../assets/icons/house-heart.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import DummbellIcon from '../../assets/icons/dumbbell.svg';

const NavigationBottom = () => {
  const navigation = useNavigation<any>();
  const currentRouteName = useNavigationState(
    state => state.routes[state.index].name,
  );
  const navigationRoutes = [
    {name: 'home', label: 'Home', icon: HouseHeartIcon},
    {name: 'workout', label: 'Workout', icon: DummbellIcon},
    {name: 'profile', label: 'Profile', icon: ProfileIcon},
  ];

  const handleNavigation = (routeName: string) => {
    navigation.navigate(routeName);
  };
  return (
    <View style={styles.container}>
      {navigationRoutes.map(navigationInfo => (
        <TouchableHighlight
          // underlayColor="#1C1A1D"
          underlayColor={rootStyles.highlightPrimaryBGColor}
          key={navigationInfo.name}
          /* eslint-disable */
          style={{
            ...styles.touchableHighlightContainer,
            opacity: currentRouteName === navigationInfo.name ? 1 : 0.7,
            // backgroundColor:
            //   currentRouteName === navigationInfo.name ? '#141315' : '#000000',
          }}
          /* eslint-enabled */
          onPress={() => handleNavigation(navigationInfo.name)}>
          <View style={styles.iconContainer}>
            {React.createElement(navigationInfo.icon, {
              width: 22,
              height: 22,
            })}
            <Text style={styles.text}>{navigationInfo.label}</Text>
          </View>
        </TouchableHighlight>
      ))}
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
    width: '100%',
    paddingHorizontal: 16,
    gap: 16,
  },
  text: {
    color: '#ffffff',
  },
  touchableHighlightContainer: {
    width: '33%',
    borderRadius: rootStyles.borderRadius,
  },
  iconContainer: {
    // backgroundColor: rootStyles.secondaryBackgroundColor,
    borderRadius: rootStyles.borderRadius,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
});
