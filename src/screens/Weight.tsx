import React, {useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {rootStyles} from '../styles/global.style';
import TopBackNavigationView from '../components/layout/TopBackNavigationView';
import CommonCard from '../components/common/CommonCard';
import DateTimePicker from '../components/common/DateTimePicker';
import BottomDrawer from '../components/common/BottomDrawer';
import WeightPicker from '../components/common/WeightPicker';
import {getDataFromStorage, storeDataInStorage} from '../services/asyncStorage';

const Weight = ({navigation}: any) => {
  console.log('1');
  const isBottomDrawerVisible = useRef(false);

  const [userWeight, setUserWeight] = useState({kg: 1, gram: 0});
  const [userSelectedWeight, setSelectedUserWeight] = useState({
    kg: 1,
    gram: 0,
  });

  const [weights, setWeight] = useState([]);

  useEffect(() => {
    const fetchWeights = async () => {
      const storedWeightData: any = await getDataFromStorage('user_weight');
      if (storedWeightData) {
        // console.log('storedWeightData', storedWeightData);
        setWeight(storedWeightData);
        const lastWeight = storedWeightData[storedWeightData.length - 1];
        console.log('lastWeight', lastWeight);
        setUserWeight(lastWeight);
        setSelectedUserWeight(lastWeight);
      }
    };

    fetchWeights();
  }, []);

  const handleOnBack = () => {
    navigation.navigate('home');
  };

  const saveWeightInStorage = async () => {
    const currentDate = new Date();
    const hours24 = currentDate.getHours();
    const weightData = {
      id: Date.now(),
      kg: userWeight.kg,
      gram: userWeight.gram,
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
      hour: hours24 % 12 || 12,
      minutes: currentDate.getMinutes().toString().padStart(2, '0'),
      period: hours24 >= 12 ? 'PM' : 'AM',
    };
    console.log('weightDatass', weightData);
    const storedWeightData = await getDataFromStorage('user_weight');
    // console.log('weightData', storedWeightData);
    if (!storedWeightData) {
      await storeDataInStorage('user_weight', [weightData]);
    } else {
      await storeDataInStorage('user_weight', [
        ...storedWeightData,
        weightData,
      ]);
    }
  };
  const handleSaveWeight = () => {
    isBottomDrawerVisible.current = false;
    setUserWeight(userSelectedWeight);
    triggerRerender();
  };
  useEffect(() => {
    if (userWeight) {
      console.log('Updated userWeight:', userWeight);
      // Perform any actions needed after userWeight has been updated
      // Save to storage or other operations can be performed here
      saveWeightInStorage();
    }
  }, [userWeight]);
  const handleCancelWeight = () => {
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
        <Text style={styles.text}>
          Current- {userWeight.kg}.{userWeight.gram}
        </Text>
        <Text style={styles.text}>
          selected- {userSelectedWeight.kg}.{userSelectedWeight.gram}
        </Text>
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
          <WeightPicker
            // eslint-disable-next-line react-native/no-inline-styles
            pickerStyle={{
              fontSize: 25,
              backgroundColor: rootStyles.secondaryBackgroundColor,
            }}
            selectedWeight={userWeight}
            onWeightSelect={setSelectedUserWeight}
          />

          {/* <DateTimePicker
            pickerStyle={{
              backgroundColor: rootStyles.secondaryBackgroundColor,
            }}
          /> */}
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
