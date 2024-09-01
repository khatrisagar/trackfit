import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ScrollPicker from '../UI/ScrollPicker'; // Ensure ScrollPicker is correctly typed

interface Weight {
  kg: number;
  gram: number;
}

interface WeightPickerProps {
  pickerStyle?: object;
  selectedWeight: Weight;
  onWeightSelect: (weight: Weight) => void;
}

const WeightPicker: React.FC<WeightPickerProps> = ({
  pickerStyle,
  selectedWeight,
  onWeightSelect,
}) => {
  // Generate the data for the weight and decimal pickers
  const weightData: number[] = Array.from({length: 200}, (_, i) => i + 1); // Adjusted to 200 for practical range
  const decimalData: number[] = Array.from({length: 10}, (_, i) => i); // Adjusted to 10 for practical range

  const [internalWeight, setInternalWeight] = useState<Weight>(selectedWeight);

  useEffect(() => {
    setInternalWeight(selectedWeight);
  }, [selectedWeight]);

  const onKilogramChange = (value: number) => {
    setInternalWeight(prev => {
      const newWeight = {kg: value, gram: prev.gram};
      onWeightSelect(newWeight);
      return newWeight;
    });
  };

  const onGramChange = (value: number) => {
    setInternalWeight(prev => {
      const newWeight = {kg: prev.kg, gram: value};
      onWeightSelect(newWeight);
      return newWeight;
    });
  };

  return (
    <View style={styles.container}>
      <ScrollPicker
        pickerStyle={pickerStyle}
        data={weightData}
        width={90}
        selectedValue={internalWeight.kg}
        onValueChange={onKilogramChange as any}
      />
      <Text style={styles.decimalSign}>.</Text>
      <ScrollPicker
        pickerStyle={pickerStyle}
        data={decimalData}
        width={90}
        selectedValue={internalWeight.gram}
        onValueChange={onGramChange as any}
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
