import React, { useState, useEffect } from 'react';
import { fetchData } from 'api';
import { Type } from 'types';

const initializeState: { results: Type[]; loading: boolean } = {
  results: [],
  loading: true,
};

const useFetch = (category: string) => {
  const [items, setItems] = useState(initializeState);

  const response = async () => {
    try {
      const data = await fetchData(category);
      setItems(({ results }) => ({
        results: [...results, ...data],
        loading: false,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    return () => {
      response();
    };
  }, []);

  return items;
};

export default useFetch;
