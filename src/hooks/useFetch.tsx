import { useState, useEffect } from 'react';
import { fetchData } from 'api';
import { ItemType } from 'types';

const initializeState: { results: ItemType[]; loading: boolean } = {
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
    setTimeout(() => {
      return response();
    }, 500);
  }, []);

  return items;
};

export default useFetch;
