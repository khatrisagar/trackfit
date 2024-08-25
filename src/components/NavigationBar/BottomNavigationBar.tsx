import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {rootStyles} from '../../styles/global.style';
import {useNavigation} from '@react-navigation/native';

// icons
import HouseHeartIcon from '../../assets/icons/house-heart.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import DummbellIcon from '../../assets/icons/dumbbell.svg';

const NavigationBottom = () => {
  const navigation = useNavigation<any>();
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
          key={navigationInfo.name}
          style={styles.touchableHighlightContainer}
          onPress={() => handleNavigation(navigationInfo.name)}>
          <View style={styles.iconContainer}>
            {React.createElement(navigationInfo.icon, {width: 25, height: 25})}
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
    paddingTop: 8,
    width: '100%',
    paddingHorizontal: 16,
    gap: 16,
  },
  text: {
    color: '#ffffff',
  },
  touchableHighlightContainer: {
    width: '33%',
  },
  iconContainer: {
    backgroundColor: rootStyles.secondaryBackgroundColor,
    borderRadius: rootStyles.borderRadius,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
});
