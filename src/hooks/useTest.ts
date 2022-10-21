import { useState, useEffect } from 'react';
import fetchTest from 'api/fetchTest';
import { Type } from 'types';

const initializeState: { results: Type[]; loading: boolean } = {
  results: [],
  loading: true,
};

const useTest = () => {
  const [items, setItems] = useState(initializeState);

  const response = async () => {
    const data = await fetchTest();
    setItems(() => ({
      results: data,
      loading: false,
    }));
  };

  useEffect(() => {
    response();
  }, []);

  return items;
};

export default useTest;
