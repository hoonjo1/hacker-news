import { useEffect, useState } from 'react';
import { fetchItems } from 'api';
import { ItemType } from 'types';

const initializeState: { results: ItemType[]; loading: boolean } = {
  results: [],
  loading: true,
};

const useItems = (idArray: number[]) => {
  const [items, setItems] = useState(initializeState);

  const response = async (idArray: number[]) => {
    const data = await fetchItems(idArray);
    if (data?.length) {
      setItems(({ results }) => ({
        results: [...results, ...data],
        loading: false,
      }));
    }
  };

  useEffect(() => {
    response(idArray);
  }, [idArray]);

  return items;
};

export default useItems;
