import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {rootStyles} from '../../styles/global.style';

const ITEM_HEIGHT = 40; // Height of each item

interface ScrollPickerProps {
  data: string[];
  width?: number;
  selectedValue: string;
  pickerStyle: any;
  onValueChange: (value: string) => void;
}

const ScrollPicker: React.FC<ScrollPickerProps> = ({
  data,
  width = 200,
  selectedValue,
  pickerStyle = {backgroundColor: rootStyles.primaryBackgroundColor},
  onValueChange,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(
    data.indexOf(selectedValue),
  );
  const scrollViewRef = useRef<ScrollView>(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debounce = (func: () => void, delay: number) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(func, delay);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const newIndex = Math.round(yOffset / ITEM_HEIGHT);
    if (newIndex !== selectedIndex) {
      setSelectedIndex(newIndex);
      debounce(() => {
        onValueChange(data[newIndex]);
      }, 1500); // Adjusted debounce delay to 300ms
    }
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      const initialOffset = selectedIndex * ITEM_HEIGHT;
      scrollViewRef.current.scrollTo({y: initialOffset, animated: true});
    }
  }, [selectedIndex]);

  return (
    <View style={[styles.container, {width}]}>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScroll}
        style={styles.scrollView}>
        <View style={styles.spacer} />
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.item,
              {
                width,
                backgroundColor: pickerStyle?.backgroundColor,
              },
            ]}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
        {/* Spacer below the last item to center the selected item */}
        <View style={styles.spacer} />
      </ScrollView>
      <View style={[styles.highlightBox, {width}]} />
      <View
        style={[
          styles.blurBoxTop,
          {width, backgroundColor: pickerStyle?.backgroundColor},
        ]}
      />
      <View
        style={[
          styles.blurBoxBottom,
          {width, backgroundColor: pickerStyle?.backgroundColor},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  },
  scrollView: {
    height: ITEM_HEIGHT * 3,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    color: rootStyles.primaryTextColor,
  },
  highlightBox: {
    position: 'absolute',
    top: ITEM_HEIGHT, // Align with the first item
    height: ITEM_HEIGHT,
    alignSelf: 'center', // Center horizontally
    pointerEvents: 'none',
    left: 0,
  },
  blurBoxTop: {
    position: 'absolute',
    top: 0,
    pointerEvents: 'none',
    height: ITEM_HEIGHT,
    opacity: 0.5,
    left: 0,
  },
  blurBoxBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    opacity: 0.5,
    height: ITEM_HEIGHT,
    pointerEvents: 'none',
  },
  spacer: {
    height: ITEM_HEIGHT,
  },
});

export default ScrollPicker;
