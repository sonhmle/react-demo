import { useCallback, useEffect, useState } from "react";

const PREFIX = "react-demo"; // change to suitable key

/**
 * local storage to store signed in user's information
 * @param {"user"} key
 * @param {{token: string, result: object}} initialValue
 * @returns {[{token: string, result: object}, Function]} initialValue
 *
 * local storage
 * @param {string} key
 * @param {object} initialValue
 * @returns {[object, Function]} initialValue
 */
export const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + "-" + key;

  const getItemFromLocalStorage = useCallback((prefixedKey) => {
    if (typeof window !== "undefined") {
      const jsonValue = localStorage.getItem(prefixedKey);

      if (jsonValue) {
        try {
          return JSON.parse(jsonValue);
        } catch (e) {
          return jsonValue;
        }
      } else return null;
    } else {
      return null;
    }
  }, []);

  const [value, setValue] = useState(() => {
    // check in local storage first
    const existingData = getItemFromLocalStorage(prefixedKey);
    if (existingData) return existingData;

    // then use the provided initial value
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  // when the value updated, update the local storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (value)
        localStorage.setItem(
          prefixedKey,
          typeof value !== "string" ? JSON.stringify(value) : value
        );
      else localStorage.removeItem(prefixedKey);
    }
  }, [prefixedKey, value]);

  // when the local storage updated, updated the value
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "storage",
        () => {
          const newData = getItemFromLocalStorage(prefixedKey);
          setValue(newData);
        },
        false
      );
    }
  }, [prefixedKey, getItemFromLocalStorage]);

  return [value, setValue];
};
