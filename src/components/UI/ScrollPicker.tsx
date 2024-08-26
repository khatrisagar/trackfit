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
  console.log('scroller mount');
  const [selectedIndex, setSelectedIndex] = useState<number>(
    data.indexOf(selectedValue),
  );
  const scrollViewRef = useRef<ScrollView>(null);
  const isDraggingRef = useRef(false); // Track if the user is dragging

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const newIndex = Math.round(yOffset / ITEM_HEIGHT);

    if (newIndex !== selectedIndex) {
      setSelectedIndex(newIndex);
    }
  };

  const handleMomentumScrollEnd = () => {
    if (scrollViewRef.current && !isDraggingRef.current) {
      onValueChange(data[selectedIndex]);
    }
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      const initialOffset = selectedIndex * ITEM_HEIGHT;
      scrollViewRef.current.scrollTo({y: initialOffset, animated: true});
    }
    // eslint-disable-next-line
  }, []);

  return (
    <View style={[styles.container, {width}]}>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        onScrollBeginDrag={() => {
          isDraggingRef.current = true;
        }}
        onScrollEndDrag={() => {
          isDraggingRef.current = false;
        }}
        scrollEventThrottle={16}
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
