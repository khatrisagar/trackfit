import React from 'react';
import {StyleSheet, View} from 'react-native';
import TopBackNavigation from '../NavigationBar/TopBackNavigation';

const TopBackNavigationView = ({
  children,
  handleOnBack,
  title,
  headerRightActions,
}: any) => {
  return (
    <View>
      <View style={styles.topbarWrapper}>
        <TopBackNavigation
          title={title}
          handleOnBack={handleOnBack}
          headerRightActions={headerRightActions}
        />
      </View>
      {children}
    </View>
  );
};

export default TopBackNavigationView;

const styles: any = StyleSheet.create({
  topbarWrapper: {
    marginBottom: 20,
  },
});
