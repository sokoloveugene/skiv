export const setLocalStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    // eslint-disable-next-line
    console.warn(`Can not set data to local storage with key: ${key}`);
  }
};

// eslint-disable-next-line
export const getLocalStorage = (key: string, defaultData?: any): any => {
  try {
    const dataFromLocalStorage: string | null = localStorage.getItem(key);
    if (!dataFromLocalStorage) {
      return defaultData;
    }
    return JSON.parse(dataFromLocalStorage);
  } catch (e) {
    // eslint-disable-next-line
    console.warn(`Can get data from local storage with key: ${key}`);
  }
};
