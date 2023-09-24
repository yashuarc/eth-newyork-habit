import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useDebounce<T>(
  value: T,
  delay?: number
): [T, Dispatch<SetStateAction<T>>, boolean] {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      setLoader(false);
    }, delay || 500);

    return () => {
      setLoader(false);
      clearTimeout(timer);
    };
  }, [value, delay]);

  return [debouncedValue, setDebouncedValue, loader];
}

export { useDebounce };
