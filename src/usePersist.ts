import { useRef, useEffect } from 'react';

export interface PersistOptions {
  key?: string;
  values: any;
  setValues(values: any): void;
  setToStorage?(key: string, values: any): void;
  getFromStorage?(key: string): any;
  encode?(values: any): any;
  decode?(values: any): any;
}

const usePersist = ({
  key = 'use-persist',
  values,
  setValues,
  setToStorage = localStorage.setItem,
  getFromStorage = localStorage.getItem,
  encode = JSON.stringify,
  decode = JSON.parse,
}: PersistOptions) => {
  const initialValues = useRef(values);

  useEffect(() => {
    const persisted = getFromStorage(key);

    if (persisted) {
      const persistedValues = decode(persisted);

      if (persistedValues) {
        setValues(persistedValues);
      }
    }
  }, [ key, decode, getFromStorage, setValues ]);

  useEffect(() => {
    if (values !== initialValues.current) {
      setToStorage(key, encode(values));
    }
  }, [ key, values, encode, setToStorage ]);
}

export default usePersist;
