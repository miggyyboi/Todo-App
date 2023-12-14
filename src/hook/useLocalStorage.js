import { useEffect, useState } from 'react';

export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(() => {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
