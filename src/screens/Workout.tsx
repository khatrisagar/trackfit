import React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import {rootStyles} from '../styles/global.style';
import TopBackNavigationView from '../components/layout/TopBackNavigationView';
import ExerciseCard from '../components/workout/ExerciseCard';

const Workout = ({navigation}: any) => {
  const handleOnBack = () => {
    navigation.navigate('home');
  };

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
      <TopBackNavigationView title="Workout" handleOnBack={handleOnBack} />
      <ScrollView scrollEnabled={true} decelerationRate="fast">
        <View style={styles.exerciseCardWrapper}>
          {excersizes.map(excersize => (
            <View key={excersize.name}>
              <ExerciseCard name={excersize.name} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles: any = StyleSheet.create({
  container: {
    height: '100%',
    padding: 10,
    backgroundColor: rootStyles.primaryBackgroundColor,
  },
  exerciseCardWrapper: {
    display: 'flex',
    gap: 6,
    padding: 4,
  },
});

export default Workout;
