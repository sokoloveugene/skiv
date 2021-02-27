export const setLocalStorage = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn(`Can not set data to local storage with key: ${key}`);
  }
};

export const getLocalStorage = (key: string, defaultData?: any): any => {
  try {
    const dataFromLocalStorage: string | null = localStorage.getItem(key);
    if (!dataFromLocalStorage) {
      return defaultData;
    }
    return JSON.parse(dataFromLocalStorage);
  } catch (e) {
    console.warn(`Can get data from local storage with key: ${key}`);
  }
};
