import React, {useState, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import ScrollPicker from '../UI/ScrollPicker';
import {Text} from 'react-native-paper';

interface DateValue {
  day: number;
  month: number;
}

interface DateTimePickerProps {
  pickerStyle?: object;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({pickerStyle}) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Memoize days and months
  const days = useMemo(() => {
    const result: {caption: string; value: DateValue}[] = [];
    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, month, day);
        const dayCaption = date.toLocaleDateString('en-US', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
        });
        result.push({caption: dayCaption, value: {day, month: month + 1}});
      }
    }
    return result;
  }, [currentYear]);

  const periods = useMemo(
    () => [
      {caption: 'AM', value: 'AM'},
      {caption: 'PM', value: 'PM'},
    ],
    [],
  );

  const hours = useMemo(() => Array.from({length: 12}, (_, i) => i + 1), []);
  const minutes = useMemo(() => Array.from({length: 60}, (_, i) => i), []);

  const [selectedDate, setSelectedDate] = useState<DateValue>(
    days.find(
      day =>
        day.value.day === currentDate.getDate() &&
        day.value.month === currentDate.getMonth() + 1,
    )?.value || days[0].value,
  );

  const [selectedPeriod, setSelectedPeriod] = useState<string>(
    periods[1].value,
  ); // Default to PM
  const [selectedHour, setSelectedHour] = useState<number>(
    currentDate.getHours() % 12 || 12,
  ); // Default to current hour in 12-hour format
  const [selectedMinute, setSelectedMinute] = useState<number>(
    currentDate.getMinutes(),
  );
  console.log('date pcicker created again');
  return (
    <View style={styles.container}>
      <ScrollPicker
        pickerStyle={pickerStyle}
        data={days.map(day => day.caption)}
        width={170}
        selectedValue={
          days.find(
            day =>
              day.value.day === selectedDate.day &&
              day.value.month === selectedDate.month,
          )?.caption || days[0].caption
        }
        onValueChange={caption => {
          const selected = days.find(day => day.caption === caption);
          if (selected) setSelectedDate(selected.value);
        }}
      />
      <ScrollPicker
        pickerStyle={pickerStyle}
        width={60}
        data={hours.map(hour => hour.toString())}
        selectedValue={selectedHour.toString()}
        onValueChange={caption => setSelectedHour(parseInt(caption, 10))}
      />
      <Text style={styles.colonSign}>:</Text>
      <ScrollPicker
        pickerStyle={pickerStyle}
        width={60}
        data={minutes.map(minute => minute.toString().padStart(2, '0'))}
        selectedValue={selectedMinute.toString().padStart(2, '0')}
        onValueChange={caption => setSelectedMinute(parseInt(caption, 10))}
      />
      <ScrollPicker
        pickerStyle={pickerStyle}
        width={60}
        data={periods.map(period => period.caption)}
        selectedValue={selectedPeriod}
        onValueChange={caption => setSelectedPeriod(caption)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // padding: 10,
    // gap: 4,
  },
  colonSign: {
    color: '#ffffff',
    fontSize: 22,
    top: 42,
  },
});

export default DateTimePicker;
