import React from 'react';
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {rootStyles} from '../../styles/global.style';
import CustomButton from '../UI/Button';

const CreateReminderDrawer = ({handleAddReminder}: any) => {
  // const [reminderType, setReminderType] = useState('one-time');

  const onPressOverlay = () => {
    console.log('pressed');
    handleAddReminder();
  };

  const handleCancel = () => {
    Keyboard.dismiss();
    handleAddReminder();
  };
  const handleSaveReminder = () => {
    Keyboard.dismiss();
    handleAddReminder();
  };

  return (
    <Pressable style={styles.createReminderWrapper} onPress={onPressOverlay}>
      <Pressable
        style={styles.container}
        onPress={event => {
          event.stopPropagation();
        }}>
        <View style={styles.reminderTypeSelector}>
          <TouchableOpacity>
            <Text style={styles.text}>once</Text>
            <Text style={styles.text}>once</Text>
          </TouchableOpacity>

          <TextInput
            placeholderTextColor="#ffffff"
            style={styles.text}
            placeholder="YYYY-MM-DD"
          />
        </View>

        <View style={styles.footerActions}>
          <CustomButton
            width="50%"
            textColor="#dadada"
            title="cancel"
            onPress={handleCancel}
          />
          <CustomButton
            textColor="#dadada"
            width="50%"
            title="save"
            onPress={handleSaveReminder}
          />
        </View>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  createReminderWrapper: {
    height: '100%',
    borderRadius: rootStyles.borderRadius,
    width: '100%',
    padding: 10,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: rootStyles.secondaryBackgroundColor,
    borderRadius: rootStyles.borderRadius,
    padding: 10,
    left: 10,
  },
  text: {
    color: rootStyles.offWhite,
    fontSize: 32,
  },
  footerActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },

  // reminder type selector start
  reminderTypeSelector: {
    padding: 10,
  },
  // reminder type selector end
});

export default CreateReminderDrawer;
