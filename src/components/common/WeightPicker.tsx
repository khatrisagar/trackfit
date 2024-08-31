import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ScrollPicker from '../UI/ScrollPicker';
import {Text} from 'react-native-paper';

const WeightPicker = ({pickerStyle}: any) => {
  // Generate the data for the weight and decimal pickers
  const weightData = Array.from({length: 500}, (_, i) => (i + 1).toString());
  const decimalData = Array.from({length: 10}, (_, i) => i.toString());

  // State to hold the selected weight and decimal values
  const [selectedWeight, setSelectedWeight] = useState(weightData[0]);
  const [selectedDecimal, setSelectedDecimal] = useState(decimalData[0]);

  return (
    <View style={styles.container}>
      <ScrollPicker
        pickerStyle={pickerStyle}
        data={weightData}
        width={90}
        selectedValue={selectedWeight}
        onValueChange={value => setSelectedWeight(value)}
      />
      <Text style={styles.decimalSign}>.</Text>
      <ScrollPicker
        pickerStyle={pickerStyle}
        data={decimalData}
        width={90}
        selectedValue={selectedDecimal}
        onValueChange={value => setSelectedDecimal(value)}
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
