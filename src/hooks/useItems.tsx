import React, { useState, useEffect } from 'react';
import { fetchItem } from 'api';
import { ItemType } from 'types';

const initializeState: { results: ItemType[]; loading: boolean } = {
  results: [],
  loading: true,
};

const useItems = (id: number[]) => {
  const [items, setItems] = useState(initializeState);

  const response = async () => {
    try {
      const data = await fetchItem(id);
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

export default useItems;
