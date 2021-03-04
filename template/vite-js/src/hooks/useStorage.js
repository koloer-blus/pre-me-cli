import { useState, useEffect } from 'react';

export default function useStorage(
  key,
  defaultValue
){
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const getItem = () => {
      const v = window.localStorage.getItem(key);
      setValue(JSON.parse(v || JSON.stringify(defaultValue)));
    };
    getItem();
  }, []);

  const setItem = (data) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
      console.log(`set ${key}  success`);
    } catch (error) {
      console.error(`set error: ${error}`);
    }
  };
  return [value, setItem];
}
