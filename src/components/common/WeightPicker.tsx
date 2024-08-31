import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ScrollPicker from '../UI/ScrollPicker';

const WeightPicker = ({pickerStyle, selectedWeight, onWeightSelect}: any) => {
  // Generate the data for the weight and decimal pickers
  const weightData = Array.from({length: 500}, (_, i) => (i + 1).toString());
  const decimalData = Array.from({length: 10}, (_, i) => i.toString());

  const onKilogramChange = (value: any) => {
    onWeightSelect({kg: value, gram: selectedWeight.gram});
  };
  const onGramChange = (value: any) => {
    onWeightSelect({kg: selectedWeight.kg, gram: value});
  };

  return (
    <View style={styles.container}>
      {/* <Text>{selectedWeight}.</Text>
      <Text>{selectedDecimal}</Text> */}
      <ScrollPicker
        pickerStyle={pickerStyle}
        data={weightData}
        width={90}
        selectedValue={selectedWeight.kg}
        onValueChange={onKilogramChange}
      />
      <Text style={styles.decimalSign}>.</Text>
      <ScrollPicker
        pickerStyle={pickerStyle}
        data={decimalData}
        width={90}
        selectedValue={selectedWeight.gram}
        onValueChange={onGramChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },

  decimalSign: {
    color: '#ffffff',
    fontSize: 22,
    top: 48,
    left: 5,
    zIndex: 1,
  },
});

export default WeightPicker;
