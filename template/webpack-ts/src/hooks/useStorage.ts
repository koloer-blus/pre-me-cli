import { useState, useEffect } from 'react';

export default function useStorage(
  key: string,
  defaultValue: any
): [any, (data: any) => void] {
  const [value, setValue] = useState<any>(defaultValue);

  useEffect(() => {
    const getItem = () => {
      const v = window.localStorage.getItem(key) || JSON.parse(JSON.stringify(""));
      setValue(JSON.parse(v) || defaultValue);
    };
    getItem();
  }, []);

  const setItem = (data: any) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
      console.log(`set ${key}  success`);
    } catch (error) {
      console.error(`set error: ${error}`);
    }
  };
  return [value, setItem];
}
