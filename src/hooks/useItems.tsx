import { useEffect, useState } from 'react';
import { fetchItems } from 'api';
import { ItemType } from 'types';

const initializeState: { results: ItemType[]; loading: boolean } = {
  results: [],
  loading: true,
};

const useItems = (idArray: number[]) => {
  const [items, setItems] = useState(initializeState);
  const [count, setCount] = useState(0);

  const isLastPage = Math.floor(idArray.length / 10) * 10 === count + 10;

  const handleLoadmore = () => {
    setItems(({ results }) => ({ results, loading: true }));
    setCount(count + 10);
  };

  const response = async (idArray: number[]) => {
    const data = await fetchItems(idArray);
    if (data) {
      setItems(({ results }) => ({
        results: [...results, ...data],
        loading: false,
      }));
    }
  };

  useEffect(() => {
    response(idArray.slice(count, count + 10));
    () => {
      return;
    };
  }, [idArray, count]);

  return { items, isLastPage, handleLoadmore };
};

export default useItems;
