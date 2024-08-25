import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const CustomButton = ({
  onPress,
  title,
  width = '150',
  fontSize = 22,
  textColor = '#ffffff',
  borderRadius = 16,
}: any) => {
  return (
    <View style={{...styles.button, width, borderRadius}}>
      <TouchableRipple
        onPress={onPress}
        rippleColor="rgba(52, 52, 52, 1)"
        style={styles.rippleContainer} // Keep this empty to avoid conflicts
      >
        <View style={styles.buttonContainer}>
          <Text style={{...styles.text, fontSize, color: textColor}}>
            {title}
          </Text>
        </View>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden', // Ensure ripple effect stays within bounds
  },
  rippleContainer: {},
  buttonContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  text: {
    textAlign: 'center',
  },
});

export default CustomButton;
