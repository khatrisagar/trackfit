import React, {useRef} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {rootStyles} from '../styles/global.style';
import TopBackNavigationView from '../components/layout/TopBackNavigationView';
import CommonCard from '../components/common/CommonCard';
import DateTimePicker from '../components/common/DateTimePicker';
import BottomDrawer from '../components/common/BottomDrawer';

const Weight = ({navigation}: any) => {
  const isBottomDrawerVisible = useRef(false);

  const handleOnBack = () => {
    navigation.navigate('home');
  };

  const handleSaveWeight = () => {
    isBottomDrawerVisible.current = false;
    triggerRerender();
  };

  const handleCancelWeight = () => {
    console.log('cancel');
    isBottomDrawerVisible.current = false;
    triggerRerender();
  };

  const openDrawer = () => {
    isBottomDrawerVisible.current = true;
    triggerRerender();
  };

  const [, setRender] = React.useState(false);
  const triggerRerender = () => setRender(prev => !prev);

  return (
    <View style={styles.container}>
      <TopBackNavigationView title="Weight" handleOnBack={handleOnBack} />
      <CommonCard>
        <Text style={styles.text}>Text</Text>
        <Text style={styles.text}>Text</Text>
      </CommonCard>
      <Button title="Open Drawer" onPress={openDrawer} />
      {/* <DateTimePicker
        pickerStyle={{
          backgroundColor: rootStyles.secondaryBackgroundColor,
        }}
      /> */}
      <BottomDrawer
        handleSave={handleSaveWeight}
        handleCancel={handleCancelWeight}
        isBottomDrawerVisible={isBottomDrawerVisible.current}>
        <View style={styles.datePickerWrapper}>
          <DateTimePicker
            pickerStyle={{
              backgroundColor: rootStyles.secondaryBackgroundColor,
            }}
          />
        </View>
      </BottomDrawer>
    </View>
  );
};

export default Weight;

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: rootStyles.primaryBackgroundColor,
  },
  text: {
    color: rootStyles.primaryTextColor,
    fontSize: rootStyles.fontSize,
  },
  datePickerWrapper: {
    paddingVertical: 40,
  },
});
