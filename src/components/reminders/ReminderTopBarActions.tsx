import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import PlusIcon from '../../assets/icons/plus.svg';
const ReminderTopBarActions = ({handleAddReminder}: any) => {
  return (
    <View>
      <TouchableHighlight onPress={handleAddReminder}>
        <PlusIcon height={25} width={25} />
      </TouchableHighlight>
    </View>
  );
};

export default ReminderTopBarActions;
