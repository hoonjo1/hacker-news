import React, { useState, useEffect } from 'react';
import { fetchList } from 'api';

const initializeState: { results: string[]; loading: boolean } = {
  results: [],
  loading: true,
};

const useList = (category: string) => {
  const [items, setItems] = useState(initializeState);

  const response = async () => {
    try {
      const data = await fetchList(category);
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

export default useList;
