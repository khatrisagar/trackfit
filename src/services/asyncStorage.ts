import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeDataInStorage = async (
  key: string,
  value: Record<string, any>,
): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // console.error('Failed to save the data to the storage');
  }
};

export const getDataFromStorage = async (
  key: string,
): Promise<any[] | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? (JSON.parse(jsonValue) as any[]) : null;
  } catch (e) {
    // console.error('Failed to fetch the array from storage');
    return null;
  }
};

export const removeDataFromStorage = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    // console.log(`Object with key "${key}" removed successfully`);
  } catch (e) {
    // console.error(`Failed to remove the object with key "${key}" from storage`);
  }
};
