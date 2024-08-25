import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import CommonCard from '../common/CommonCard';

const ExerciseCard = ({name}: any) => {
  return (
    <TouchableHighlight style={styles.cardWrapper}>
      <CommonCard>
        <View style={styles.cardContentWrapper}>
          <Text style={styles.cardText}>{name}</Text>
        </View>
      </CommonCard>
    </TouchableHighlight>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({
  cardWrapper: {
    // padding: 4,
  },
  cardContentWrapper: {
    height: 60,
  },

  cardText: {
    fontSize: 20,
  },
});
