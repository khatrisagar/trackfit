import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import BackIcon from '../../assets/icons/chevron-left.svg';
import {rootStyles} from '../../styles/global.style';

const TopBackNavigation = ({title, handleOnBack, headerRightActions}: any) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.leftContainer}>
        <TouchableHighlight
          underlayColor={rootStyles.secondaryBackgroundColor}
          onPress={handleOnBack}
          style={styles.backIconWrapper}>
          <BackIcon height={25} width={25} />
        </TouchableHighlight>
        <Text style={styles.pageTitle}>{title}</Text>
      </View>
      {headerRightActions && (
        <View style={styles.rightContainer}>{headerRightActions}</View>
      )}
    </View>
  );
};

export default TopBackNavigation;

const styles: any = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingTop: 10,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rightContainer: {
    marginTop: 2,
    paddingRight: 6,
  },
  backIconWrapper: {
    padding: 10,
    borderRadius: 50,
  },
  pageTitle: {
    color: rootStyles.primaryTextColor,
    fontSize: rootStyles.headerTwoFontSize,
  },
});
