import { useState, useEffect, useCallback } from 'react';
import { fetchItems } from 'api';
import { ItemType } from 'types';

const initializeState: { results: ItemType[]; loading: boolean } = {
  results: [],
  loading: true,
};

const useItems = async (id: number[]) => {
  const [items, setItems] = useState(initializeState);

  // const response = useCallback(
  //   async (id: number[]) => {
  //     try {
  //       if (items.results.length) {
  //         const data = await fetchItems(id.slice(0, 4));
  //         setItems(({ results }) => ({
  //           results: [...results, ...data],
  //           loading: false,
  //         }));
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  //   [items.results.length]
  // );

  return items;
};

export default useItems;
