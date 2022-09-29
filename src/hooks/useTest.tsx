import { fetchItems } from 'api';
import { useCallback } from 'react';

const useTest = (id: number[]) => {
  const memoizedCallback = async () => {
    const data = await fetchItems(id);
    console.log(data);
  };

  memoizedCallback();
};

export default useTest;
