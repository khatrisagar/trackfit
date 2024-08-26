import React, {useEffect, useRef} from 'react';
import {
  Animated,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {rootStyles} from '../../styles/global.style';
import CustomButton from '../UI/Button';

const BottomDrawer = ({
  handleSave,
  handleCancel,
  children,
  isBottomDrawerVisible,
}: any) => {
  const animation = useRef(new Animated.Value(1000)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isBottomDrawerVisible ? 0 : 1000,
      useNativeDriver: true,
      duration: 400,
    }).start();
  }, [isBottomDrawerVisible, animation]);

  const closeDrawer = (callback: Function) => {
    Animated.timing(animation, {
      toValue: 1000,
      useNativeDriver: true,
      duration: 400,
    }).start(() => {
      callback();
    });
  };

  const onCancel = () => {
    console.log('cancel');
    closeDrawer(handleCancel);
  };

  const onSave = () => {
    closeDrawer(handleSave);
  };

  return (
    <Animated.View
      style={[styles.animation, {transform: [{translateY: animation}]}]}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.bottomDrawerWrapper} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        {children}
        <View style={styles.footerActions}>
          <CustomButton
            width="50%"
            textColor="#dadada"
            title="cancel"
            onPress={onCancel}
          />
          <View style={styles.separator} />
          <CustomButton
            textColor="#dadada"
            width="50%"
            title="save"
            onPress={onSave}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomDrawerWrapper: {
    height: '100%',
    borderRadius: rootStyles.borderRadius,
    width: '100%',
    position: 'absolute',
    left: 12,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: rootStyles.secondaryBackgroundColor,
    borderRadius: rootStyles.borderRadius,
    padding: 10,
    left: 12,
  },
  footerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
    gap: 8,
  },
  separator: {
    width: 1,
    height: '70%',
    backgroundColor: '#383838',
  },
  animation: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

export default BottomDrawer;
