import { useState, useEffect } from 'react';
import { isBrowser } from '../core/isBrowser';

/**
 * Hook to read and write values to localStorage.
 * Automatically parses JSON and handles stringification.
 * 
 * @param key - The localStorage key.
 * @param initialValue - The fallback value if none exists.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const readValue = (): T => {
    if (!isBrowser) return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = (value: T | ((val: T) => T)) => {
    if (!isBrowser) {
      console.warn(`Tried setting localStorage key "${key}" outside of browser environment.`);
      return;
    }

    try {
      const valueToStore = typeof value === 'function' ? (value as (val: T) => T)(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Sync state if another tab changes the value
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setStoredValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue] as const;
}
