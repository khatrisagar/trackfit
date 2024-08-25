import React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import {rootStyles} from '../styles/global.style';
import ExerciseCard from '../components/workout/ExerciseCard';
import NavigationBottom from '../components/NavigationBar/BottomNavigationBar';

const Workout = () => {
  const excersizes = [
    {
      name: 'Chest',
    },
    {
      name: 'Back',
    },
    {
      name: 'Legs',
    },
    {
      name: 'Biceps',
    },
    {
      name: 'Triceps',
    },
    {
      name: 'Shoulders',
    },
    {
      name: 'ABS',
    },

    {
      name: 'Cardio',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={true} decelerationRate="fast">
        <View style={styles.exerciseCardWrapper}>
          {excersizes.map(excersize => (
            <View key={excersize.name}>
              <ExerciseCard name={excersize.name} />
            </View>
          ))}
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
  exerciseCardWrapper: {
    display: 'flex',
    gap: 6,
    padding: 8,
  },
});

export default Workout;
